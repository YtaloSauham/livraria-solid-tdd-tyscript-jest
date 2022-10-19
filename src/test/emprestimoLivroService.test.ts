import axios from "axios";
import e from "express";
import Emprestimo from "../entities/Emprestimo";
import Livro from "../entities/Livro";
import Usuarios from "../entities/Usuarios";
import EmprestimoServices from "../services/EmprestimoServices";

const livroTeste= new Livro(1,"1987","Fulano",false,false);

const livroTeste2= new Livro(1,"1987","Fulano",true,false);

const userComumTeste= new Usuarios(1,"Ytalo");

const userSemEmprestimoTeste = new Usuarios(2,"Fulano")

const formatarDatas = require('../hook/FormatarDatas')

const emprestimo1Teste = {"_idEmprestimo":"1", 
"dataInicioEmprestimo": "18/10/2022", 
"dataPrevistaDevolucaoEmprestimo": "25/10/2022", 
"idUser": 1, "livro": [{"autor": "Fulano", 
"emprestado": true, "id": 1, "reservado": true, 
"titulo": "1987"}]}

const listaEmprestimos:Array<emprestimoProps> =[
    {_idEmprestimo:"1", 
    dataInicioEmprestimo: new Date(18/10/2022), 
    dataPrevistaDevolucaoEmprestimo: new Date(25/10/2022), 
    idUser: 1, livro: [{autor: "Fulano", 
    emprestado: true, id: 1, reservado: true, 
    titulo: "1987"}]}]


type emprestimoProps={
    _idEmprestimo  : string;
    idUser: Number;
    livro: [
        id:Number,
        titulo:string,
        autor:string,
        reservado:boolean,
        emprestado:boolean
    ];
    dataInicioEmprestimo: Date;
    dataPrevistaDevolucaoEmprestimo: Date;
    dataDevoluicaoEmprestimo: Date;

}


test("Deve verificar se o livro está disponivel para emprestimo", function () {

    let emprestimoService2 = new EmprestimoServices();
    expect(emprestimoService2.validarLivro([livroTeste])).toHaveLength(1)

})



test("Deve fazer um emprestimo de um livro não reservado/emprestado", function () {


    let emprestimoService2 = new EmprestimoServices();
    let emprestimo = new Emprestimo(1)
    emprestimo = emprestimoService2.fazerEmprestimo(userComumTeste,[livroTeste])
    
    emprestimo.set_idEmprestimo("1")

    expect(emprestimo).toMatchObject({"_idEmprestimo":"1", 
    "dataInicioEmprestimo": "18/10/2022", 
    "dataPrevistaDevolucaoEmprestimo": "25/10/2022", 
    "idUser": 1, "livro": [{"autor": "Fulano", 
    "emprestado": true, "id": 1, "reservado": true, 
    "titulo": "1987"}]})
 
 })

 
test("Deve fazer um emprestimo de um livro reservado/emprestado", function () {


    
    let emprestimoService2 = new EmprestimoServices();
    let emprestimo = new Emprestimo(1)
    emprestimo = emprestimoService2.fazerEmprestimo(userComumTeste,[livroTeste2])
    
    expect(emprestimo).toThrowError()
})


test("Deve garantirque a data prevista esteja correta,após a locação de um livro.", function () {
    
    let emprestimoService2 = new EmprestimoServices();
    let devolucaoInicialTeste = new Date(2022, 10, 18)
    
    expect(formatarDatas(emprestimoService2.calcularDataDevolucao(devolucaoInicialTeste))).toEqual("25/11/2022")
   

}) 

test("Deve testar um usuario sem emprestimos.", function () {
    let emprestimoService2 = new EmprestimoServices();
    let emprestimo = new Emprestimo(1)
    emprestimo = emprestimoService2.fazerEmprestimo(userComumTeste,[livroTeste])
    emprestimo.set_idEmprestimo("1")
    expect(emprestimoService2.consultarEmprestimoPorUsuario(userSemEmprestimoTeste,[emprestimo])).toHaveLength(0)
   

}) 

