import { Imprimivel } from './Imprimivel';

export class Despesa extends Imprimivel {

    constructor( readonly data: Date, readonly quantidade: number, readonly valor: number) {

        super();
    }

    get total() {
        return this.quantidade * this.valor;
    }

    paraTexto():void {
        console.log('-- paraTexto --');
        console.log(
            `Data: ${this.data}
            Quantidade: ${this.quantidade},
            Valor: ${this.valor},
            Volume: ${this.total}`
        )
    }
}