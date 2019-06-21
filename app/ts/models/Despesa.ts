export class Despesa {

    constructor( readonly data: Date, readonly quantidade: number, readonly valor: number) {
    }

    get total() {
        return this.quantidade * this.valor;
    }
}