abstract class View<T> {

    protected _elemento: Element;

    constructor(selector: string) {
        this._elemento = document.querySelector(selector);
    }

    update(model: T) {
        this._elemento.innerHTML = this.template(model);
    }

    abstract template(model: T): string;
}