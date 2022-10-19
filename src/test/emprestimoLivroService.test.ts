import axios from "axios";
import e from "express";
import Emprestimo from "../entities/Emprestimo";
import Livro from "../entities/Livro";
import Usuarios from "../entities/Usuarios";
import EmprestimoServices from "../services/EmprestimoServices";

const livroTesteNaoReservado = new Livro(1,"1987","Fulano",false,false);
const livroTesteNaoReservado2 = new Livro(2,"Viagem ao Fim da Noite","Fulano",false,false);
const livroTesteNaoReservado3 = new Livro(3,"A Divina Comédia","Fulano",false,false);
const livroTesteNaoReservado4 = new Livro(4,"Ao Farol","Fulano",false,false);

const livroTesteReservado= new Livro(1,"1987","Fulano",true,false);


const userComumTeste= new Usuarios(1,"Ytalo");

const userSemEmprestimoTeste = new Usuarios(2,"Fulano")

const formatarDatas = require('../hook/FormatarDatas')

const emprestimo1Teste = {"_idEmprestimo":"1", 
"dataInicioEmprestimo": "18/10/2022", 
"dataPrevistaDevolucaoEmprestimo": "25/10/2022", 
"idUser": 1, "livro": [{"autor": "Fulano", 
"emprestado": true, "id": 1, "reservado": true, 
"titulo": "1987"}]}



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
    expect(emprestimoService2.validarLivro([livroTesteNaoReservado])).toHaveLength(1)

})



test("Deve fazer um emprestimo de um livro não reservado/emprestado", function () {


    let emprestimoService2 = new EmprestimoServices();
    let emprestimo = new Emprestimo(1)
    emprestimo = emprestimoService2.fazerEmprestimo(userComumTeste,[livroTesteNaoReservado])
    
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
    emprestimo = emprestimoService2.fazerEmprestimo(userComumTeste,[livroTesteReservado])
    
    expect(emprestimo).toThrowError()
})


test("Deve garantir a data prevista esteja correta,após a locação de um livro.", function () {
    
    let emprestimoService2 = new EmprestimoServices();
    let devolucaoInicialTeste = new Date(2022, 10, 18)
    
    expect(formatarDatas(emprestimoService2.calcularDataDevolucao(devolucaoInicialTeste))).toEqual("25/11/2022")
   

}) 

test("Deve testar um usuario sem emprestimos.", function () {
    let emprestimoService2 = new EmprestimoServices();
    let emprestimo = new Emprestimo(1)
    emprestimo = emprestimoService2.fazerEmprestimo(userComumTeste,[livroTesteNaoReservado])
    emprestimo.set_idEmprestimo("1")
    expect(emprestimoService2.consultarEmprestimoPorUsuario(userSemEmprestimoTeste,[emprestimo])).toHaveLength(0)
   

}) 

test("Deve testar um usuario com um emprestimo.", function () {
    let emprestimoService2 = new EmprestimoServices();
    let emprestimo = new Emprestimo(1)
    emprestimo = emprestimoService2.fazerEmprestimo(userComumTeste,[livroTesteNaoReservado])
    emprestimo.set_idEmprestimo("1")
    expect(emprestimoService2.consultarEmprestimoPorUsuario(userComumTeste,[emprestimo])).toHaveLength(1)
   

}) 

test("Deve testar um usuario com 3 emprestimos.", function () {
    let emprestimoService2 = new EmprestimoServices();
    let emprestimoTeste = new Emprestimo(1)
    let emprestimoTeste2 = new Emprestimo(1)
    let emprestimoTeste3 = new Emprestimo(1)

    emprestimoTeste = emprestimoService2.fazerEmprestimo(userComumTeste,[livroTesteNaoReservado])
    emprestimoTeste2 = emprestimoService2.fazerEmprestimo(userComumTeste,[livroTesteNaoReservado2])
    emprestimoTeste3 = emprestimoService2.fazerEmprestimo(userComumTeste,[livroTesteNaoReservado3])

    emprestimoTeste.set_idEmprestimo("1")
    emprestimoTeste2.set_idEmprestimo("1")
    emprestimoTeste3.set_idEmprestimo("1")

    expect(emprestimoService2.consultarEmprestimoPorUsuario(userComumTeste,[emprestimoTeste,emprestimoTeste2,emprestimoTeste3])).toHaveLength(3)
   

})


test("Deve testar um usuario com 4 emprestimos.", function () {
    let emprestimoService2 = new EmprestimoServices();
    let emprestimoTeste = new Emprestimo(1)
    let emprestimoTeste2 = new Emprestimo(1)
    let emprestimoTeste3 = new Emprestimo(1)
    let emprestimoTeste4 = new Emprestimo(1)

    emprestimoTeste = emprestimoService2.fazerEmprestimo(userComumTeste,[livroTesteNaoReservado])
    emprestimoTeste2 = emprestimoService2.fazerEmprestimo(userComumTeste,[livroTesteNaoReservado2])
    emprestimoTeste3 = emprestimoService2.fazerEmprestimo(userComumTeste,[livroTesteNaoReservado3])
    emprestimoTeste4 = emprestimoService2.fazerEmprestimo(userComumTeste,[livroTesteNaoReservado4])

    emprestimoTeste.set_idEmprestimo("1")
    emprestimoTeste2.set_idEmprestimo("1")
    emprestimoTeste3.set_idEmprestimo("1")
    emprestimoTeste4.set_idEmprestimo("1")

    expect(emprestimoService2.fazerEmprestimo(userComumTeste,[livroTesteNaoReservado,livroTesteNaoReservado2,livroTesteNaoReservado3,livroTesteNaoReservado4])).toThrowError()
   

}) 


test("Deve testar uma devolução antes da data prevista.", function () {
    let emprestimoService2 = new EmprestimoServices();
    let emprestimo = new Emprestimo(1)
    emprestimo = emprestimoService2.fazerEmprestimo(userComumTeste,[livroTesteNaoReservado])
    emprestimo.set_idEmprestimo("1")
    expect(emprestimoService2.fazerDevolucao([emprestimo])).toEqual(20)
   

}) 
