System.register(["./View"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var View_1, DespesasView;
    return {
        setters: [
            function (View_1_1) {
                View_1 = View_1_1;
            }
        ],
        execute: function () {
            DespesasView = class DespesasView extends View_1.View {
                template(despesas) {
                    return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>TOTAL</th>
                </tr>
            </thead>
            <tbody>
                ${despesas.paraArray().map(despesa => `<tr>
                    <td>${despesa.data.getDate()}/${despesa.data.getMonth() + 1}/${despesa.data.getFullYear()}</td>
                    <td>${despesa.quantidade}</td>
                    <td>${despesa.valor}</td>
                    <td>${despesa.total}</td>
                </tr>`).join('')}
            </tbody>
            <tfoot>
            </tfoot>
        </table>
        `;
                }
            };
            exports_1("DespesasView", DespesasView);
        }
    };
});
