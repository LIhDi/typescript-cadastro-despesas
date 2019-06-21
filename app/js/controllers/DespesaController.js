System.register(["../views/index", "../models/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, DespesaController;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            }
        ],
        execute: function () {
            DespesaController = class DespesaController {
                constructor() {
                    this._despesas = new index_2.Despesas();
                    this._despesasView = new index_1.DespesasView('#despesasView');
                    this._mensagemView = new index_1.MensagemView('#mensagemView');
                    this._inputData = $('#data');
                    this._inputQuantidade = $('#quantidade');
                    this._inputValor = $('#valor');
                    this._despesasView.update(this._despesas);
                }
                adiciona(event) {
                    event.preventDefault();
                    const despesa = new index_2.Despesa(new Date(this._inputData.val().replace(/-/g, ',')), parseInt(this._inputQuantidade.val()), parseFloat(this._inputValor.val()));
                    this._despesas.adiciona(despesa);
                    this._despesasView.update(this._despesas);
                    this._mensagemView.update('Despesa adicionada com sucesso');
                }
            };
            exports_1("DespesaController", DespesaController);
        }
    };
});
