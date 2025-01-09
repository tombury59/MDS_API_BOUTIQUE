const jwt = require('jsonwebtoken');
const TypeUtilisateur = require('../models/TYPE_UTILISATEUR');
const secretKey = 'test';

const getTypeUtilisateur = async (req, res) => {
    try {
        const types = await TypeUtilisateur.findAll();
        res.json(types);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}


module.exports = {getTypeUtilisateur };