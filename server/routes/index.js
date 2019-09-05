const blockController = require('../controllers').block;
const swaggerUi = require('swagger-ui-express'),
	  swaggerDocument = require('../swagger.json');


module.exports = (app) => {
	app.get('/api/', (req, res) => res.status(200).send({
    message: 'Welcome to the Blockchain API!',
	}));
	
	app.post('/api/block', blockController.create);
	app.get('/api/block/', blockController.list);
	app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};