const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const api = require('./src/routes/api');
const products = require('./src/routes/products');
const users = require('./src/routes/users');
const messages = require('./src/routes/messages');
const assignmentRequests = require('./src/routes/assignmentRequests');
const orders = require('./src/routes/orders');
const deliveryTours = require('./src/routes/deliveryTours');
const roles = require('./src/routes/userRoles');

const sequelize = require('./src/models/connectionBDD');
const authenticateJWT = require('./src/middleware/authenticateJWT');

const app = express();
const port = 3001;

app.use(express.json());

app.use('/v0/api', api);
app.use('/v0/products', products);
app.use('/v0/users', users);
app.use('/v0/messages', messages);
app.use('/v0/assignment-requests', assignmentRequests);
app.use('/v0/orders', orders);
app.use('/v0/delivery-tours', deliveryTours);
app.use('/v0/roles', roles);

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
    apis: ['./src/routes/*.js'], // Chemin vers les fichiers de route
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/v0/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const path = require('path');
app.get('/v0/socket', (req, res) => {
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