import e from 'express';
import Emprestimo from '../entities/Emprestimo';
import Livro from '../entities/Livro'
import Usuarios from '../entities/Usuarios'
import MyDate from '../hook/MyDate';

const FormatarDatas = require('../hook/FormatarDatas')

export default class EmprestimoServices{


    public validarLivro(LivroEmprestimo:Array<Livro>):Array<Livro>{

        const livroAux:Array<Livro> = new Array<Livro>();
        livroAux.push(...LivroEmprestimo)
        
        /*
        for(let i = 0; i < livorAux.length;i++){
            
            if(livroAux[i].isEmprestado()===true || livroAux[i].isReservado()===true){
                
                livroAux.slice(i,1)
                i--;
           
            } else{
               livroAux.
            }
        }
        */

        const livroValidado:Array<Livro> = livroAux.filter(function(data, i , arr){
            return data[i].isEmprestado()===false || data[i].isReservado()===false
        })

        return livroValidado

       

    }


    public fazerEmprestimo(UsuarioEmprestimo: Usuarios, LivroEmprestimo: Array<Livro>):Emprestimo{
        
        const emprestimo:Emprestimo = new Emprestimo();
        const dataAux = new Date()
        const dataDevolucaoPresvista =FormatarDatas(this.calcularDataDevolucao(dataAux))
        const dataInicialEmprestimo =FormatarDatas(dataAux)

        const livroValidado = this.validarLivro(LivroEmprestimo)

        
        try{   
        if(livroValidado.length > 0) {
            emprestimo.setIdUser(UsuarioEmprestimo.getId())
            emprestimo.setLivro(livroValidado)
            emprestimo.setDataInicioEmprestimo(dataInicialEmprestimo)
            emprestimo.setDataPrevistaDevolucaoEmprestimo(dataDevolucaoPresvista)
            return emprestimo
            
            
            } else {
                throw new Error("Error");
    }
        }catch(error){
            throw error
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

    public reservarLivro(Livro:Array<Livro>):void{

        const livroEmprestimo:Array<Livro> = Livro;

        livroEmprestimo.forEach((element, index)=>{
            element.setEmprestado(true)
            element.setReservado(true)
        })




    }

}