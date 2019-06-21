System.register(["../views/DespesasView", "../views/MensagemView", "../models/Despesas", "../models/Despesa"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var DespesasView_1, MensagemView_1, Despesas_1, Despesa_1, DespesaController;
    return {
        setters: [
            function (DespesasView_1_1) {
                DespesasView_1 = DespesasView_1_1;
            },
            function (MensagemView_1_1) {
                MensagemView_1 = MensagemView_1_1;
            },
            function (Despesas_1_1) {
                Despesas_1 = Despesas_1_1;
            },
            function (Despesa_1_1) {
                Despesa_1 = Despesa_1_1;
            }
        ],
        execute: function () {
            DespesaController = class DespesaController {
                constructor() {
                    this._despesas = new Despesas_1.Despesas();
                    this._despesasView = new DespesasView_1.DespesasView('#despesasView');
                    this._mensagemView = new MensagemView_1.MensagemView('#mensagemView');
                    this._inputData = $('#data');
                    this._inputQuantidade = $('#quantidade');
                    this._inputValor = $('#valor');
                    this._despesasView.update(this._despesas);
                }
                adiciona(event) {
                    event.preventDefault();
                    const despesa = new Despesa_1.Despesa(new Date(this._inputData.val().replace(/-/g, ',')), parseInt(this._inputQuantidade.val()), parseFloat(this._inputValor.val()));
                    this._despesas.adiciona(despesa);
                    this._despesasView.update(this._despesas);
                    this._mensagemView.update('Despesa adicionada com sucesso');
                }
            };
            exports_1("DespesaController", DespesaController);
        }
    };
});
