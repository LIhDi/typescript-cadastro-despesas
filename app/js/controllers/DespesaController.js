class DespesaController {
    constructor() {
        this._despesas = new Despesas();
        this._despesasView = new DespesasView('#despesasView');
        this._mensagemView = new MensagemView('#mensagemView');
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._despesasView.update(this._despesas);
    }
    adiciona(event) {
        event.preventDefault();
        const despesa = new Despesa(new Date(this._inputData.val().replace(/-/g, ',')), parseInt(this._inputQuantidade.val()), parseFloat(this._inputValor.val()));
        this._despesas.adiciona(despesa);
        this._despesasView.update(this._despesas);
        this._mensagemView.update('Despesa adicionada com sucesso');
    }
}
