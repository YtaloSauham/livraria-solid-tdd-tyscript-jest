import Emprestimo from '../entities/Emprestimo';
import Livro from '../entities/Livro'
import Usuarios from '../entities/Usuarios'
import MyDate from '../hook/MyDate';

const FormatarDatas = require('../hook/FormatarDatas')
const SepararDia = require('../hook/SepararDiasStrings')


export default class EmprestimoServices{


    public validarLivro(LivroEmprestimo:Array<Livro>):Array<Livro>{

        const livroAux:Array<Livro> = new Array<Livro>();
        livroAux.push(...LivroEmprestimo)

        try{
            if(livroAux.length > 3){
                throw new Error("Quantidade de livros a emprestar maior que 3")
            }
    
            else{
            
            const livroValidado:Array<Livro> = livroAux.filter(function(data, i , arr){
                return data.isEmprestado()===false && data.isReservado()===false
            })
    
            return livroValidado
    

        } }catch(error){
            throw new Error("Quantidade de livros a emprestar maior que 3")
        }
       
    }

    



    public fazerEmprestimo(UsuarioEmprestimo: Usuarios, LivroEmprestimo: Array<Livro>):Emprestimo{
        
        const emprestimo:Emprestimo = new Emprestimo();
        const dataAux = new Date()
        const dataDevolucaoPresvista =FormatarDatas(this.calcularDataDevolucao(dataAux))
        const dataInicialEmprestimo =FormatarDatas(dataAux)

        const livroValidado = this.validarLivro(LivroEmprestimo)

        
        try{   
        if(livroValidado.length > 0) {
            this.reservarLivro(livroValidado)
            emprestimo.setIdUser(UsuarioEmprestimo.getId())
            emprestimo.setLivro(livroValidado)
            emprestimo.setDataInicioEmprestimo(dataInicialEmprestimo)
            emprestimo.setDataPrevistaDevolucaoEmprestimo(dataDevolucaoPresvista)
            this.salvarEmprestimo(emprestimo)
            return emprestimo
            
            
            } else {
                throw new Error("Livro não pode ser nulo");
    }
        }catch(error){
            throw new Error("Livros Selecionados já estão reservados")
        }

        
    }


    public calcularDataDevolucao(DataEmprestimo: Date):Date{
        const devolucaoPrevista = new MyDate(DataEmprestimo)
        devolucaoPrevista.addDays(7);
        return devolucaoPrevista
    }


    public salvarEmprestimo(Emprestimo: Emprestimo):void{
        const emprestimoDoUsuario: Array<Emprestimo> = new Array<Emprestimo>()
        emprestimoDoUsuario.push(Emprestimo)
    }
    

    public consultarEmprestimoPorUsuario(UsuarioEmprestimo: Usuarios,Emprestimos:Array<Emprestimo>):Array<Emprestimo>{
      
        const emprestimosAux:Array<Emprestimo> = new Array<Emprestimo>(...Emprestimos)
        const emprestimosPorUsuario:Array<Emprestimo>=emprestimosAux.filter(function(data, i , arr){
            return data.getIdUser() === UsuarioEmprestimo.getId()
       
        })

        return emprestimosPorUsuario
    }

  
    public reservarLivro(Livro:Array<Livro>):void{

        const livroEmprestimo:Array<Livro> = Livro;

        livroEmprestimo.forEach((element, index)=>{
            element.setEmprestado(true)
            element.setReservado(true)
        })

    }

    public fazerDevolucao(Emprestimos: Array<Emprestimo>) : Number{

        const emprestimosAux:Array<Emprestimo> = new Array<Emprestimo>(...Emprestimos)
        const dataDevolucaoHoje = new Date()

        emprestimosAux.forEach((element, index)=>{
            element.setDataDevoluicaoEmprestimo(dataDevolucaoHoje)})
          

        return this.calcularPreco(this.verificaAtrasoDevolucao(emprestimosAux))


    }

    public calcularPreco(EmprestimoDevolvidos: Array<ItemsAtrasadoProps>):Number{

        const itemsDevolvidos = EmprestimoDevolvidos[0].itemsDevolvidos

        const diasAtrasados = EmprestimoDevolvidos[0].diasAtrasado

        const valorFixo:number = 5

        const precoTotal:number = (diasAtrasados * 0.40) + itemsDevolvidos* valorFixo
        const calcular60PorcentoAluguel:number = (60/100) * precoTotal

        if(precoTotal >= calcular60PorcentoAluguel){
            return calcular60PorcentoAluguel
        } else{
            return precoTotal
        }
        

    }

    public verificaAtrasoDevolucao(Emprestimos: Array<Emprestimo>):Array<ItemsAtrasadoProps>{

        const emprestimosAux:Array<Emprestimo> = new Array<Emprestimo>(...Emprestimos)
        let quantidadeItemsDevolvidos:number = emprestimosAux.length;
        let quantidadeDiasAtrasado:number = 0;
        let dataAux ;
        let diaDataDevolucao;
        let diaDataPrevista;
        


        for(let i = 0; i < emprestimosAux.length; i++){

            dataAux= FormatarDatas(emprestimosAux[i].getDataDevoluicaoEmprestimo())

            diaDataDevolucao = SepararDia(dataAux)
            diaDataPrevista = SepararDia(emprestimosAux[i].getDataPrevistaDevolucaoEmprestimo())

            if(dataAux > emprestimosAux[i].getDataPrevistaDevolucaoEmprestimo()){
                quantidadeDiasAtrasado =  0 + quantidadeDiasAtrasado + Math.abs((diaDataDevolucao - diaDataPrevista))
            }

            else{

                quantidadeDiasAtrasado = quantidadeDiasAtrasado + Math.abs((diaDataDevolucao - diaDataPrevista))

        }

       

    }
    const emprestimoAtrasos: Array<ItemsAtrasadoProps> = new Array<ItemsAtrasadoProps>({itemsDevolvidos:quantidadeItemsDevolvidos,diasAtrasado:quantidadeDiasAtrasado})

    return emprestimoAtrasos
    

}

}