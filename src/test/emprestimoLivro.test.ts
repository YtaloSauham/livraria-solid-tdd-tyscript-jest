import axios from "axios";
import EmprestimoServices from "../services/EmprestimoServices";
import Emprestimo from '../entities/Emprestimo';
import Livro from '../entities/Livro'

test("Deve alugar um livro não emprestado", function () {

    const livroTeste= new Livro(1,"1987","Fulano",false,false);

    //const userTeste= new Usuarios(1,"Ytalo");

    //const emprestimoService = new EmprestimoService.realizarEmprestimo(userTeste,livroTeste)
    
   const emprestimoService2 = new EmprestimoServices();
   
   const teste = emprestimoService2.validarLivro([livroTeste,livroTeste])

  

    expect(teste).toHaveLength(2)


    
})