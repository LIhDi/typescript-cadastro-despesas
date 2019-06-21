import { DespesaController } from './controllers/DespesaController';

const controller = new DespesaController();

$('.form').submit(controller.adiciona.bind(controller));