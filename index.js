const express = require('express');

// Les différents routeurs associés aux CRUDS
const api = require('./routes/api');
const products = require('./routes/products');
const users = require('./routes/users');
//const comments = require('./routes/comments');
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
//app.use('/comments', comments);
app.use('/messages', messages);
app.use('/assignment-requests', assignmentRequests);
app.use('/orders', orders);
app.use('/delivery-tours', deliveryTours);

sequelize.sync().then(() => {
    console.log('✅ Base de données synchronisée');
    app.listen(port, () => {
        console.log(`Serveur en écoute sur http://localhost:${port}`);
    });
}).catch(err => {
    console.error('❌ Erreur lors de la synchronisation de la base de données :', err);
});