import Emprestimo from "./entities/Emprestimo";
import Livro from "./entities/Livro";
import Usuarios from "./entities/Usuarios";
import EmprestimoServices from "./services/EmprestimoServices";


const livroTeste= new Livro(1,"1987","Fulano",false,false);

const livroTeste2= new Livro(1,"1987","Fulano",true,false);

const userTeste= new Usuarios(1,"Ytalo");


let emprestimoService2 = new EmprestimoServices();

let emprestimo = new Emprestimo()


emprestimo = emprestimoService2.fazerEmprestimo(userTeste,livroTeste)


console.log(emprestimo)

