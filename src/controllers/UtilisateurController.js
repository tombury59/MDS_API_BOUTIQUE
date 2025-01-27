const jwt = require('jsonwebtoken');
const Utilisateur = require('../models/UTILISATEUR');
//const TypeUtilisateur = require('../models/TYPE_UTILISATEUR');
const secretKey = 'test';

const login = async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
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

const getUsers = async (req, res) => {
    try {
        const users = await Utilisateur.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const getUserById = async (req, res) => {
    try {
        const user = await Utilisateur.findByPk(req.params.id);
        if (user === null) {
            res.status(404).send({ message: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const getUserByType = async (req, res) => {
    try {
        const user = await Utilisateur.findAll({ where: { idType: req.params.id } });
        //const user = await Utilisateur.findAll({ where: { idType: 1 } });
        if (user.length === 0) {
            res.status(404).send({ message: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const createUser = async (req, res) => {
    try {
        const user = await Utilisateur.create(req.body);
        res.json(user);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const updateUser = async (req, res) => {
    try {
        const user = await Utilisateur.findByPk(req.params.id);
        if (user) {
            await user.update(req.body);
            res.json(user);
        } else {
            res.status(404).send({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const deleteUser = async (req, res) => {
    try {
        const user = await Utilisateur.findByPk(req.params.id);
        if (user) {
            await user.destroy();
            res.json({ message: 'User deleted' });
        } else {
            res.status(404).send({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

module.exports = { login,getUsers,getUserById,getUserByType,createUser,updateUser,deleteUser };