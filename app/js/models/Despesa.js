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
            };
            exports_1("Despesa", Despesa);
        }
    };
});
