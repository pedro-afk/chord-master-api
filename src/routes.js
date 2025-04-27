const express = require('express');
const routes = express.Router();

const chordController = require('./controllers/chordController');

routes.post('/create', chordController.store);
routes.put('/update', chordController.update);
routes.get('/read', chordController.index);
routes.get('/details/:_id',chordController.detail);
routes.delete('/delete/:_id',chordController.delete);

module.exports = routes;