System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Despesa;
    return {
        setters: [],
        execute: function () {
            Despesa = class Despesa {
                constructor(_data, _quantidade, _valor) {
                    this._data = _data;
                    this._quantidade = _quantidade;
                    this._valor = _valor;
                }
                get data() {
                    return this._data;
                }
                get quantidade() {
                    return this._quantidade;
                }
                get valor() {
                    return this._valor;
                }
                get total() {
                    return this._quantidade * this._valor;
                }
            };
            exports_1("Despesa", Despesa);
        }
    };
});
