System.register(["./controllers/DespesaController"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var DespesaController_1, controller;
    return {
        setters: [
            function (DespesaController_1_1) {
                DespesaController_1 = DespesaController_1_1;
            }
        ],
        execute: function () {
            controller = new DespesaController_1.DespesaController();
            $('.form').submit(controller.adiciona.bind(controller));
            $('#botao-importa').click(controller.importarDados.bind(controller));
        }
    };
});
