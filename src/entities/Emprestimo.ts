export default class Emprestimo{
    
    private idEmprestimo : Number;
    private idUser: Number;
    private livro: Array<Livro>;
    private dataInicioEmprestimo: Date;
    private dataPrevistaDevolucaoEmprestimo: Date;
    private dataDevoluicaoEmprestimo: Date;

  constructor(
    idEmprestimo: Number, 
    idUser: Number, 
    livro: Array<Livro>, 
    dataInicioEmprestimo: Date, 
    dataPrevistaDevolucaoEmprestimo: Date, 
    dataDevoluicaoEmprestimo: Date
) {
    this.idEmprestimo = idEmprestimo
    this.idUser = idUser
    this.livro = livro
    this.dataInicioEmprestimo = dataInicioEmprestimo
    this.dataPrevistaDevolucaoEmprestimo = dataPrevistaDevolucaoEmprestimo
    this.dataDevoluicaoEmprestimo = dataDevoluicaoEmprestimo
  }
 

   

    public getIdEmprestimo(): Number {
        return this.idEmprestimo;
    }

    public setIdEmprestimo(idEmprestimo: Number): void {
        this.idEmprestimo = idEmprestimo;
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

    public setLivro(livro: Array<Livro>): void {
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




}