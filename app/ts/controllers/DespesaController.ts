import { DespesasView, MensagemView } from '../views/index';
import { Despesas, Despesa } from '../models/index';

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

        let data = new Date(this._inputData.val().replace(/-/g, ','));

        if(!this._ehDiaUtil(data)) {

            this._mensagemView.update('Somente negociações em dias úteis, por favor!');
            return
        }

        const despesa = new Despesa(
            new Date(this._inputData.val().replace(/-/g, ',')),
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val())
        );

        this._despesas.adiciona(despesa);
        this._despesasView.update(this._despesas);
        this._mensagemView.update('Despesa adicionada com sucesso');
    }

    private _ehDiaUtil(data: Date) {

        return data.getDay() != DiaDaSemana.Sabado && data.getDay() != DiaDaSemana.Domingo;
    }
}

enum DiaDaSemana {
    // Enum Domingo começa com 2, Segunda com 3
    // Domingo = 2
    Domingo,
    Segunda,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado,
}