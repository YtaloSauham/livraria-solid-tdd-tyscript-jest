class Usuarios{
    private id:Number;
    private nome:String;

    constructor(id:Number, nome:String){
        this.id=id;
        this.nome=nome;
    }

    public getId(): Number {
        return this.id;
    }

    public setId(id: Number): void {
        this.id = id;
    }

    public getNome(): String {
        return this.nome;
    }

    public setNome(nome: String): void {
        this.nome = nome;
    }

}