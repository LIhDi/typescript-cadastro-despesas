import { Despesa } from './Despesa';

export class Despesas {

    private _despesas: Despesa[] = [];

    adiciona(despesa: Despesa) {

        this._despesas.push(despesa);
    }

    paraArray() {

        return [].concat(this._despesas);
    }
}