System.register(["./Imprimivel"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Imprimivel_1, Despesas;
    return {
        setters: [
            function (Imprimivel_1_1) {
                Imprimivel_1 = Imprimivel_1_1;
            }
        ],
        execute: function () {
            Despesas = class Despesas extends Imprimivel_1.Imprimivel {
                constructor() {
                    super(...arguments);
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
            };
            exports_1("Despesas", Despesas);
        }
    };
});
