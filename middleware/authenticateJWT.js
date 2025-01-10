const jwt = require('jsonwebtoken');
const secretKey = 'test';

const authenticateJWT = (req, res, next) => {
    //const token = req.header('Authorization');
    //console.log(token);

    const token = req.header('Authorization').split(' ')[1];

    if (token) {
        jwt.verify(token, secretKey, (err, user) => {
            if (err) {
                console.log(err);
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