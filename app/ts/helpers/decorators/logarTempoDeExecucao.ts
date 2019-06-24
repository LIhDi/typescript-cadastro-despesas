// Podemos receber parametros nos decorators

export function logarTempoDeExecucao(emSegundos: boolean = false) {

    // Um decorator deve retornar uma outra função
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {

        const metodoOriginal = descriptor.value;

        // Temos o metodo original sendo sobrescrito porque já foi guardado no metodoOriginal
        // Podendo receber parametros do tipo any, porque não sabemos
        descriptor.value = function(...args: any[]) {

            let divisor = 1;
                let unidade = 'milisegundos'
                if(emSegundos) {
                    divisor = 1000;
                    unidade = 'segundos';
                }

            // Podemos fazer qualquer coisa antes
            console.log(`Parâmetros do método ${propertyKey}: ${JSON.stringify(args)}`);
            const t1 = performance.now();

            // Chamamos o metodoOriginal no contexto(this) que queremos e passamos os parametros que eu quero passar e recebendo o retorno do metodoOriginal
            const retorno = metodoOriginal.apply(this, args);

            // Podemos fazer qualquer coisa depois
            const t2 = performance.now();
            console.log(`${propertyKey} demorou ${t2 - t1} ms`);

            return retorno;
        }

        return descriptor;
    }
}