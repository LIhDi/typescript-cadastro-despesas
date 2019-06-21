class Despesas {
    constructor() {
        this._despesas = [];
    }
    adiciona(despesa) {
        this._despesas.push(despesa);
    }
    paraArray() {
        return [].concat(this._despesas);
    }
}
