const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

// Les différents routeurs associés aux CRUDS
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
const port = 3002;

app.use(express.json());

app.use('/api', api);
app.use('/products', products);
app.use('/users', users);
app.use('/messages', messages);
app.use('/assignment-requests', assignmentRequests);
app.use('/orders', orders);
app.use('/delivery-tours', deliveryTours);


const path = require('path');

app.get('/test-socket', (req, res) => {
    res.sendFile(path.join(__dirname, 'socketIo.html'));
});

const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
    socket.on('message', (data) => {
        console.log('Message reçu :', data.message);
        io.emit('message', {
            message: data.message,
            senderId: data.senderId
        });
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