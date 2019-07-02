System.register(["../views/index", "../models/index", "../helpers/decorators/index", "../services/index", "../helpers/index"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, index_3, index_4, index_5, DespesaController, DiaDaSemana;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (index_3_1) {
                index_3 = index_3_1;
            },
            function (index_4_1) {
                index_4 = index_4_1;
            },
            function (index_5_1) {
                index_5 = index_5_1;
            }
        ],
        execute: function () {
            DespesaController = class DespesaController {
                constructor() {
                    this._despesas = new index_2.Despesas();
                    this._despesasView = new index_1.DespesasView('#despesasView');
                    this._mensagemView = new index_1.MensagemView('#mensagemView');
                    this._service = new index_4.DespesaService();
                    this._despesasView.update(this._despesas);
                }
                adiciona() {
                    let data = new Date(this._inputData.val().replace(/-/g, ','));
                    if (!this._ehDiaUtil(data)) {
                        this._mensagemView.update('Somente negociações em dias úteis, por favor!');
                        return;
                    }
                    const despesa = new index_2.Despesa(new Date(this._inputData.val().replace(/-/g, ',')), parseInt(this._inputQuantidade.val()), parseFloat(this._inputValor.val()));
                    this._despesas.adiciona(despesa);
                    index_5.imprime(despesa, this._despesas);
                    this._despesasView.update(this._despesas);
                    this._mensagemView.update('Despesa adicionada com sucesso');
                }
                _ehDiaUtil(data) {
                    return data.getDay() != DiaDaSemana.Sabado && data.getDay() != DiaDaSemana.Domingo;
                }
                importarDados() {
                    this._service
                        .obterDespesas(res => {
                        if (res.ok) {
                            return res;
                        }
                        else {
                            throw new Error(res.statusText);
                        }
                    })
                        .then(despesasParaImportar => {
                        const despesasJaImportadas = this._despesas.paraArray();
                        despesasParaImportar
                            .filter(despesa => !despesasJaImportadas.some(jaImportada => despesa.ehIgual(jaImportada)))
                            .forEach(despesa => this._despesas.adiciona(despesa));
                        this._despesasView.update(this._despesas);
                    });
                }
            };
            __decorate([
                index_3.domInject('#data')
            ], DespesaController.prototype, "_inputData", void 0);
            __decorate([
                index_3.domInject('#quantidade')
            ], DespesaController.prototype, "_inputQuantidade", void 0);
            __decorate([
                index_3.domInject('#valor')
            ], DespesaController.prototype, "_inputValor", void 0);
            __decorate([
                index_3.evitarMultiplosCliques()
            ], DespesaController.prototype, "adiciona", null);
            exports_1("DespesaController", DespesaController);
            (function (DiaDaSemana) {
                DiaDaSemana[DiaDaSemana["Domingo"] = 0] = "Domingo";
                DiaDaSemana[DiaDaSemana["Segunda"] = 1] = "Segunda";
                DiaDaSemana[DiaDaSemana["Terca"] = 2] = "Terca";
                DiaDaSemana[DiaDaSemana["Quarta"] = 3] = "Quarta";
                DiaDaSemana[DiaDaSemana["Quinta"] = 4] = "Quinta";
                DiaDaSemana[DiaDaSemana["Sexta"] = 5] = "Sexta";
                DiaDaSemana[DiaDaSemana["Sabado"] = 6] = "Sabado";
            })(DiaDaSemana || (DiaDaSemana = {}));
        }
    };
});
