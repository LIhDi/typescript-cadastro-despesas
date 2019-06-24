import { logarTempoDeExecucao } from '../helpers/decorators/index';

// Usamos o export para podermos exportar os arquivos e colocar todos no index.js
export abstract class View<T> {

    protected _elemento: JQuery;
    private _escapar: boolean;

    // Parametro Opcional ? e devem ser os ultimos parametros do teu construtor
    // constructor(selector: string, escapar?: boolean) {
    // caso não seja passado o boolean no construtor , escapar recebe o valor false como padrão, porque antes ele era opcional e poderia vir nulo, o que gerava erro.
    constructor(selector: string, escapar: boolean = false) {
        this. _escapar = escapar;
        this._elemento = $(selector);
    }
    // O ts suporta o uso experimental do decorator
    // Com o decorator eu posso executar uma modificação antes e depois do metodo
    @logarTempoDeExecucao()
    update(model: T) {
        let template = this.template(model);
        if(this._escapar)
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');

        this._elemento.html(this.template(model));
    }

    abstract template(model: T): string;
}