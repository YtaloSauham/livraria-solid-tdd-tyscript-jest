export default class Livro {
    
    private id:Number;
    private titulo:string;
    private autor:string;
    private reservado:boolean;
    private emprestado:boolean;

    
    constructor(id:number, titulo:string, autor:string, reservado:boolean, emprestado:boolean){
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.reservado= reservado;
        this.emprestado = emprestado;
    }

    public getId(): Number {
        return this.id;
    }

    public setId(id: Number): void {
        this.id = id;
    }

    public getTitulo(): string {
        return this.titulo;
    }

    public setTitulo(titulo: string): void {
        this.titulo = titulo;
    }

    public getAutor(): string {
        return this.autor;
    }

    public setAutor(autor: string): void {
        this.autor = autor;
    }

    public isReservado(): boolean {
        return this.reservado;
    }

    public setReservado(reservado: boolean): void {
        this.reservado = reservado;
    }

    public isEmprestado(): boolean {
        return this.emprestado;
    }

    public setEmprestado(emprestado: boolean): void {
        this.emprestado = emprestado;
    }


    
   

    
    
    
}