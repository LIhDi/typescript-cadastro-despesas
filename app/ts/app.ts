import { DespesaController } from './controllers/DespesaController';

const controller = new DespesaController();

$('.form').submit(controller.adiciona.bind(controller));
$('#botao-importa').click(controller.importarDados.bind(controller));