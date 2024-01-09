const express = require('express');
const routes = express.Router();

const louvorController = require('./controllers/louvorController');

routes.post('/inserirLouvor', louvorController.store);
routes.put('/alterarLouvor', louvorController.update);
routes.get('/buscarLouvores', louvorController.index);
routes.get('/detalhesLouvor/:_id',louvorController.detail);
routes.delete('/apagarLouvor/:_id',louvorController.delete);

module.exports = routes;