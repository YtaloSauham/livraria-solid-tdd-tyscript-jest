
function SepararDiasStrings(Data:Date):String{

    const dias = new String(Data)
    dias.substr(0,1)
    return dias

}

module.exports=SepararDiasStrings