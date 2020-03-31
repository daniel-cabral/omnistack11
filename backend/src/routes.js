const express = require('express');
const routes = express.Router();
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

// SESSAO

routes.post('/sessions', SessionController.create);

// CONSULTA ONG
routes.get('/ongs', OngController.index);

// CADASTRO ONG
routes.post('/ongs', OngController.create);


// CADASTRO INCIDENTES
routes.post('/incidents', IncidentController.create);

// LISTAR INCIDENTES
routes.get('/incidents', IncidentController.index);

// DELETAR INCIDENTES
routes.delete('/incidents/:id', IncidentController.delete);


// LISTAR PERFIS
routes.get('profile', ProfileController.index)

module.exports = routes;