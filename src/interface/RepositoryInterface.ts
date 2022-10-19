import Emprestimo from "../entities/Emprestimo";
import Usuarios from "../entities/Usuarios";


export default interface RepositoryInterface{
    
    salvarEmprestimo(Emprestimo: Emprestimo):void;
    consultarEmprestimo(Usuarios:Usuarios):Array<Emprestimo>
    

}