import axios from "axios";
import Emprestimo from "../entities/Emprestimo";
import Livro from "../entities/Livro";
import Usuarios from "../entities/Usuarios";
import EmprestimoServices from "../services/EmprestimoServices";

const livroTeste= new Livro(1,"1987","Fulano",false,false);

const livroTeste2= new Livro(1,"1987","Fulano",true,false);

const userTeste= new Usuarios(1,"Ytalo");


type emprestimoProps={
    _idEmprestimo  : string;
    idUser: Number;
    livro: Livro;
    dataInicioEmprestimo: Date;
    dataPrevistaDevolucaoEmprestimo: Date;
    dataDevoluicaoEmprestimo: Date;

}

/*
test("Deve verificar se o livro está disponivel para emprestimo", function () {

    let emprestimoService2 = new EmprestimoServices();
   
   emprestimoService2.validarLivro(livroTeste)
  
    expect(emprestimoService2.validarLivro(livroTeste)).toBe(true)

})

*/

test("Deve fazer um emprestimo de um livro não reservado/emprestado", function () {


    let emprestimoService2 = new EmprestimoServices();
    let emprestimo = new Emprestimo
    emprestimo = emprestimoService2.fazerEmprestimo(userTeste,livroTeste)
    
    expect(emprestimo).toMatchObject({"_idEmprestimo": "83bdf767-0c2e-4fed-b633-eba54a8b6b84", "dataInicioEmprestimo": "18/10/2022", "dataPrevistaDevolucaoEmprestimo": "25/10/2022", "idUser": 1, "livro": {"autor": "Fulano", "emprestado": true, "id": 1, "reservado": true, "titulo": "1987"}})
 
 })

 
/*test.only("Deve fazer um emprestimo de um livro reservado/emprestado", function () {


    let emprestimoService2 = new EmprestimoServices();
   
    
    expect(emprestimoService2.fazerEmprestimo(userTeste,livroTeste2)).toThrowError()
})*/

/*test.only("Deve fazer um emprestimo de um livro reservado/emprestado", function () {


    let emprestimoService2 = new EmprestimoServices();
   
    
    expect(emprestimoService2.fazerEmprestimo(userTeste,livroTeste2)).toThrowError()
}) */