const jwt = require('jsonwebtoken');
const Utilisateur = require('../models/UTILISATEUR');
const secretKey = 'test';

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const utilisateur = await Utilisateur.findOne({ where: { emailUtilisateur: email, mdpUtilisateur: password } });
        if (utilisateur) {
            const token = jwt.sign({ id: utilisateur.id }, secretKey, { expiresIn: '1800s' });
            res.json({ token });
        } else {
            res.status(401).send({ message: 'Email ou mot de passe incorrect' });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}


module.exports = { login };