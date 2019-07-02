System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Despesas;
    return {
        setters: [],
        execute: function () {
            Despesas = class Despesas {
                constructor() {
                    this._despesas = [];
                }
                adiciona(despesa) {
                    this._despesas.push(despesa);
                }
                paraArray() {
                    return [].concat(this._despesas);
                }
                paraTexto() {
                    console.log('-- paraTexto --');
                    console.log(JSON.stringify(this._despesas));
                }
                ehIgual(despesas) {
                    return JSON.stringify(this._despesas) == JSON.stringify(despesas.paraArray);
                }
            };
            exports_1("Despesas", Despesas);
        }
    };
});
