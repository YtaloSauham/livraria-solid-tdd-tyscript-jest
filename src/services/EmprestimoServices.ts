import Emprestimo from '../entities/Emprestimo';
import Livro from '../entities/Livro'
import Usuarios from '../entities/Usuarios'

export default class EmprestimoServices{


    public validarLivro(LivroEmprestimo:Array<Livro>):Array<Livro>{

        const livro:Array<Livro> = LivroEmprestimo;

        return livro
       // const livroValidado = livro.filter(resp=> resp.isReservado() = true)

       
    }


    public fazerEmprestimo(UsuarioEmprestimo: Usuarios, LivroEmprestimo: Array<Livro>):void{
        
        const emprestimoService = new Emprestimo();
   
        this.validarLivro(LivroEmprestimo) ?? (
            
            emprestimoService.setIdUser(UsuarioEmprestimo.getId())
            emprestimoService.setLivro(LivroEmprestimo)
        )
    }


    
}