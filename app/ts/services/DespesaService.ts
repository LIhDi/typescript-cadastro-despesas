import { DespesaParcial, Despesa } from '../models/index';

export class DespesaService{
    // Quando retornamos uma Promise temos que dizer o tipo de dado
    obterNegociacoes(handler: HandlerFunction): Promise<Despesa[]> {

        return fetch('http://localhost:8080/dados')
        .then(res => handler(res))
        .then(res => res.json())
        .then((dados: DespesaParcial[]) =>
            dados.map(dado => new Despesa(new Date(), dado.vezes, dado.montante))
        )
        .catch(err => console.log(err));
    }
}

// Criamos essa interface para no obterNegociacoes Receber obrigatoriamente uma função que recebe um Response e retorna um Response
export interface HandlerFunction {

    (res: Response): Response
}