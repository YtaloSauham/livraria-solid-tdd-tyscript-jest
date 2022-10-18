import e from 'express';
import Emprestimo from '../entities/Emprestimo';
import Livro from '../entities/Livro'
import Usuarios from '../entities/Usuarios'
import MyDate from '../hook/MyDate';



export default class EmprestimoServices{


    public validarLivro(LivroEmprestimo:Livro):Boolean{

        const livroValidado:Livro = LivroEmprestimo;

        
        if(livroValidado.isEmprestado()===true || livroValidado.isReservado()===true){
            return false
            
            
        } else{
            return true
        }

    }


    public fazerEmprestimo(UsuarioEmprestimo: Usuarios, LivroEmprestimo: Livro):Emprestimo{
        
        const emprestimo:Emprestimo = new Emprestimo();
        const dataAux = new Date()
        const livroEmprestimo:Livro = LivroEmprestimo;

        const dataDevolucaoPresvista =require('../hook/FormatarDatas')(this.calcularDataDevolucao(dataAux))

        const dataInicialEmprestimo =require('../hook/FormatarDatas')(dataAux)
        
        
        try{   
        if(this.validarLivro(LivroEmprestimo)) {
            livroEmprestimo.setEmprestado(true)
            livroEmprestimo.setReservado(true)
            emprestimo.setIdUser(UsuarioEmprestimo.getId())
            emprestimo.setLivro(livroEmprestimo)
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
}