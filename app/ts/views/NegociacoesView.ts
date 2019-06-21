class DespesasView extends View<Despesas> {

    template(despesas: Despesas): string {

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
                ${despesas.paraArray().map(despesa =>
                `<tr>
                    <td>${despesa.data.getDate()}/${despesa.data.getMonth()+1}/${despesa.data.getFullYear()}</td>
                    <td>${despesa.quantidade}</td>
                    <td>${despesa.valor}</td>
                    <td>${despesa.total}</td>
                </tr>`).join('')}
            </tbody>
            <tfoot>
            </tfoot>
        </table>
        `
    }
}