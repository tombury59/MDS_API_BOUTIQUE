const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const api = require('./routes/api');
const products = require('./routes/products');
const users = require('./routes/users');
const messages = require('./routes/messages');
const assignmentRequests = require('./routes/assignmentRequests');
const orders = require('./routes/orders');
const deliveryTours = require('./routes/deliveryTours');

const sequelize = require('./models/connectionBDD');
const authenticateJWT = require('./middleware/authenticateJWT');

const app = express();
const port = 3001;

app.use(express.json());

app.use('/api', api);
app.use('/products', products);
app.use('/users', users);
app.use('/messages', messages);
app.use('/assignment-requests', assignmentRequests);
app.use('/orders', orders);
app.use('/delivery-tours', deliveryTours);

// Configuration de Swagger
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'API Documentation',
            version: '1.0.0',
            description: 'API documentation with Swagger',
        },
        servers: [
            {
                url: `http://localhost:${port}`,
            },
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
        },
        security: [
            {
                bearerAuth: [],
            },
        ],
    },
    apis: ['./routes/*.js'], // Chemin vers les fichiers de route
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const path = require('path');
app.get('/socket', (req, res) => {
    res.sendFile(path.join(__dirname, 'socketIo.html'));
});

const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });

    socket.on('message', (msg) => {
        console.log('Message received: ' + msg);
        io.emit('message', msg);
    });
});

sequelize.sync().then(() => {
    console.log('✅ Base de données synchronisée');
    server.listen(port, () => {
        console.log(`Serveur en écoute sur http://localhost:${port}`);
    });
}).catch(err => {
    console.error('❌ Erreur lors de la synchronisation de la base de données :', err);
});