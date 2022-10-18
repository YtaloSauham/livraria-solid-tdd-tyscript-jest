import axios from "axios";
import e from "express";
import Emprestimo from "../entities/Emprestimo";
import Livro from "../entities/Livro";
import Usuarios from "../entities/Usuarios";
import EmprestimoServices from "../services/EmprestimoServices";

const livroTeste= new Livro(1,"1987","Fulano",false,false);

const livroTeste2= new Livro(1,"1987","Fulano",true,false);

const userTeste= new Usuarios(1,"Ytalo");

const formatarDatas = require('../hook/FormatarDatas')

type emprestimoProps={
    _idEmprestimo  : string;
    idUser: Number;
    livro: Livro;
    dataInicioEmprestimo: Date;
    dataPrevistaDevolucaoEmprestimo: Date;
    dataDevoluicaoEmprestimo: Date;

}


test.only("Deve verificar se o livro está disponivel para emprestimo", function () {

    let emprestimoService2 = new EmprestimoServices();
    expect(emprestimoService2.validarLivro([livroTeste])).toHaveLength(1)

})


/*
test("Deve fazer um emprestimo de um livro não reservado/emprestado", function () {


    let emprestimoService2 = new EmprestimoServices();
    let emprestimo = new Emprestimo(1)
    emprestimo = emprestimoService2.fazerEmprestimo(userTeste,livroTeste)
    
    emprestimo.set_idEmprestimo("1")

    expect(emprestimo).toMatchObject({"_idEmprestimo":"1", 
    "dataInicioEmprestimo": "18/10/2022", 
    "dataPrevistaDevolucaoEmprestimo": "25/10/2022", 
    "idUser": 1, "livro": {"autor": "Fulano", 
    "emprestado": true, "id": 1, "reservado": true, 
    "titulo": "1987"}})
 
 })

 
test("Deve fazer um emprestimo de um livro reservado/emprestado", function () {


    let emprestimoService2 = new EmprestimoServices();
   
    
    expect(emprestimoService2.fazerEmprestimo(userTeste,livroTeste2)).toThrowError()
})


test("Deve garantirque a data prevista esteja correta,após a locação de um livro.", function () {
    
    let emprestimoService2 = new EmprestimoServices();
    let devolucaoInicialTeste = new Date(2022, 10, 18)
    
    expect(formatarDatas(emprestimoService2.calcularDataDevolucao(devolucaoInicialTeste))).toEqual("25/11/2022")
   

}) 
*/