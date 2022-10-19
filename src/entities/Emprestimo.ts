import crypto from 'crypto';
import Livro from '../entities/Livro'

 export default class Emprestimo{
    
    private _idEmprestimo : string;
    private idUser: Number;
    private livro: Array<Livro>;
    private dataInicioEmprestimo: Date;
    private dataPrevistaDevolucaoEmprestimo: Date;
    private dataDevoluicaoEmprestimo: Date;
    private precoEmprestimo: Number;

 
    
   
    constructor(idEmprestimo?) {
        this._idEmprestimo = idEmprestimo ?? crypto.randomUUID();
    }

   


    public get_idEmprestimo(): string {
        return this._idEmprestimo;
    }
    
    public set_idEmprestimo(_idEmprestimo: string): void {
        this._idEmprestimo = _idEmprestimo;
    }

    public getIdUser(): Number {
        return this.idUser;
    }

    public setIdUser(idUser: Number): void {
        this.idUser = idUser;
    }

    public getLivro(): Array<Livro> {
        return this.livro;
    }

    public setLivro(livro:Array<Livro>): void {
        this.livro = livro;
    }

    public getDataInicioEmprestimo(): Date {
        return this.dataInicioEmprestimo;
    }

    public setDataInicioEmprestimo(dataInicioEmprestimo: Date): void {
        this.dataInicioEmprestimo = dataInicioEmprestimo;
    }

    public getDataPrevistaDevolucaoEmprestimo(): Date {
        return this.dataPrevistaDevolucaoEmprestimo;
    }

    public setDataPrevistaDevolucaoEmprestimo(dataPrevistaDevolucaoEmprestimo: Date): void {
        this.dataPrevistaDevolucaoEmprestimo = dataPrevistaDevolucaoEmprestimo;
    }

    public getDataDevoluicaoEmprestimo(): Date {
        return this.dataDevoluicaoEmprestimo;
    }

    public setDataDevoluicaoEmprestimo(dataDevoluicaoEmprestimo: Date): void {
        this.dataDevoluicaoEmprestimo = dataDevoluicaoEmprestimo;
    }

    public getPrecoEmprestimo(): Number {
        return this.precoEmprestimo;
    }

    public setPrecoEmprestimo(precoEmprestimo: Number): void {
        this.precoEmprestimo = precoEmprestimo;
    }

    


}