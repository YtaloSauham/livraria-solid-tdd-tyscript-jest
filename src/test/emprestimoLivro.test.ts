import axios from "axios";

test("Deve alugar um livro não emprestado", async function () {

    await axios({
        url:"http://localhost:3001/emprestimo",
        method: "post",
        data:{
            id:4,
            livro:[{
                id:2,
                titulo:"Naruto",
                autor:"Fulano",
                reservado:false,
                emprestado:true
            }],
            dataEmprestimo:"19/10/2022",
            dataDevulocao:"20/10/2022",
            dataPrevistaDevolocao:"20/10/2022",
            precoAluguel:20    
        }
    });

    const responseGetEmprestimos = await axios({
            url:"http://localhost:3001/emprestimo",
            method: "get",
    })

    expect(responseGetEmprestimos).toHaveLength(2)


    
})