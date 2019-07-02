import { MeuObjeto } from './MeuObjeto';

export class Despesa implements MeuObjeto<Despesa> {

    constructor( readonly data: Date, readonly quantidade: number, readonly valor: number) {

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
    ehIgual(despesa: Despesa): boolean {
        return this.data.getDate() == despesa.data.getDate()
            && this.data.getMonth() == despesa.data.getMonth()
            && this.data.getFullYear() == despesa.data.getFullYear();
    }
}