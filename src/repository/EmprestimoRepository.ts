import  RepositoryInterface  from "../interface/RepositoryInterface"


 export default class EmprestimoRepository implements RepositoryInterface{


    public salvarEmprestimo(Emprestimo: Emprestimo):void{
        const emprestimoDoUsuario: Array<Emprestimo> = new Array<Emprestimo>()
        emprestimoDoUsuario.push(Emprestimo)
    }



 }