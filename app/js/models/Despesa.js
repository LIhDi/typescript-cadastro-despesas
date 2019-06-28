System.register(["./Imprimivel"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Imprimivel_1, Despesa;
    return {
        setters: [
            function (Imprimivel_1_1) {
                Imprimivel_1 = Imprimivel_1_1;
            }
        ],
        execute: function () {
            Despesa = class Despesa extends Imprimivel_1.Imprimivel {
                constructor(data, quantidade, valor) {
                    super();
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
            };
            exports_1("Despesa", Despesa);
        }
    };
});
