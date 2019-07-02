System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Despesa;
    return {
        setters: [],
        execute: function () {
            Despesa = class Despesa {
                constructor(data, quantidade, valor) {
                    this.data = data;
                    this.quantidade = quantidade;
                    this.valor = valor;
                }
                get total() {
                    return this.quantidade * this.valor;
                }
                paraTexto() {
                    console.log('-- paraTexto --');
                    console.log(`Data: ${this.data}
            Quantidade: ${this.quantidade},
            Valor: ${this.valor},
            Volume: ${this.total}`);
                }
                ehIgual(despesa) {
                    return this.data.getDate() == despesa.data.getDate()
                        && this.data.getMonth() == despesa.data.getMonth()
                        && this.data.getFullYear() == despesa.data.getFullYear();
                }
            };
            exports_1("Despesa", Despesa);
        }
    };
});
