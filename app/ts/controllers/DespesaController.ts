import { DespesasView } from '../views/DespesasView';
import { MensagemView } from '../views/MensagemView';
import { Despesas } from '../models/Despesas';
import { Despesa } from '../models/Despesa';

export class DespesaController {

    private _inputData: JQuery;
    private _inputQuantidade: JQuery;
    private _inputValor: JQuery;
    private _despesas = new Despesas();
    private _despesasView = new DespesasView('#despesasView');
    private _mensagemView = new MensagemView('#mensagemView');

        constructor() {

            this._inputData = $('#data');
            this._inputQuantidade = $('#quantidade');
            this._inputValor = $('#valor');
            this._despesasView.update(this._despesas);
        }

        adiciona(event: Event) {

        event.preventDefault();

        const despesa = new Despesa(
            new Date(this._inputData.val().replace(/-/g, ',')),
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val())
        );

        this._despesas.adiciona(despesa);
        this._despesasView.update(this._despesas);
        this._mensagemView.update('Despesa adicionada com sucesso');
    }
}