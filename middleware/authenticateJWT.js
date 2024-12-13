const jwt = require('jsonwebtoken');
const secretKey = 'test';

const authenticateJWT = (req, res, next) => {
    const token = req.header('Authorization');

    if (token) {
        jwt.verify(token, secretKey, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }
            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

module.exports = authenticateJWT;