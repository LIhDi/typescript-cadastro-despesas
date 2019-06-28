import { DespesaParcial, Despesa } from '../models/index';

export class DespesaService{
    // Quando retornamos uma Promise temos que dizer o tipo de dado
    obterNegociacoes(handler: Function): Promise<Despesa[]> {

        return fetch('http://localhost:8080/dados')
        .then(res => handler(res))
        .then(res => res.json())
        .then((dados: DespesaParcial[]) =>
            dados.map(dado => new Despesa(new Date(), dado.vezes, dado.montante))
        )
        .catch(err => console.log(err));
    }
}