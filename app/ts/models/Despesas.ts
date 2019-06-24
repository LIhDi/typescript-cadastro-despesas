import { Despesa } from './Despesa';

export class Despesas {

    private _despesas: Despesa[] = [];

    adiciona(despesa: Despesa): void {

        this._despesas.push(despesa);
    }

    paraArray(): Despesa[] {
        // vamos tratar esse novo array que criamos com base no array de despesas cpmp dp tipo Despesa para não dar erro., pois ele pode ser do tipo undefined e dar erro.
        return ([] as Despesa[]).concat(this._despesas);
    }
}