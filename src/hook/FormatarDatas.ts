
function formatarDatas(Data):String{

    const options = {
        year:"numeric",
        moth:"numeric",
        day:"numeric"
    }
    const dataFormatada = new Intl.DateTimeFormat("pt-br").format(Data)
    return dataFormatada

}

module.exports=formatarDatas