import { DespesasView, MensagemView } from '../views/index';
import { Despesas, Despesa } from '../models/index';
import { domInject, evitarMultiplosCliques} from '../helpers/decorators/index';
import { DespesaParcial } from '../models/index';
import { DespesaService, HandlerFunction } from '../services/index';
import { imprime } from '../helpers/index';

export class DespesaController {

    // Tiramos do construtor para na hora de carregarmos o Controller não pegar todos os elementos do dom
    // O objetivo é o DespesaController vai injetar o _inputData e transforma-lo em um getter e dentro desse getter ele vai a funcionalidade
    // De que se for acessado a primeira vez, ir no Dom e pegar, se alguem acessar novamente já vai ser retornado, ou seja , lazyLoader
    @domInject('#data')
    private _inputData: JQuery;

    @domInject('#quantidade')
    private _inputQuantidade: JQuery;

    @domInject('#valor')
    private _inputValor: JQuery;

    private _despesas = new Despesas();
    private _despesasView = new DespesasView('#despesasView');
    private _mensagemView = new MensagemView('#mensagemView');

    private _service = new DespesaService();

        constructor() {
            this._despesasView.update(this._despesas);
        }
        @evitarMultiplosCliques()
        adiciona() {

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

        imprime(despesa, this._despesas);

        this._despesasView.update(this._despesas);
        this._mensagemView.update('Despesa adicionada com sucesso');
    }

    private _ehDiaUtil(data: Date) {

        return data.getDay() != DiaDaSemana.Sabado && data.getDay() != DiaDaSemana.Domingo;
    }

    importarDados() {
        this._service
            .obterDespesas(res => {

                if(res.ok) {
                    return res;
                } else {
                    throw new Error(res.statusText);
                }
            })
            .then(despesasParaImportar => {

                const despesasJaImportadas = this._despesas.paraArray();

                despesasParaImportar
                    .filter(despesa =>
                        !despesasJaImportadas.some(jaImportada =>
                            despesa.ehIgual(jaImportada)))
                    .forEach(despesa =>
                    this._despesas.adiciona(despesa));

                this._despesasView.update(this._despesas);
            });
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