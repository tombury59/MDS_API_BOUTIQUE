const jwt = require('jsonwebtoken');
const TypeUtilisateur = require('../models/TYPE_UTILISATEUR');
const secretKey = 'test';

const getTypeUtilisateur = async (req, res) => {

    try {
        const typeUtilisateur = await TypeUtilisateur.findAll();
        if (typeUtilisateur.length === 0) {
            res.status(404).send({ message: 'Roles not found' });
        }
        res.json(typeUtilisateur);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

const getTypeUtilisateurById = async (req, res) => {
    try {
        const typeUtilisateur = await TypeUtilisateur.findByPk(req.params.id);
        if(typeUtilisateur === null){
            res.status(404).send({ message: 'Role not found' });
        }
        res.json(typeUtilisateur);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

const createTypeUtilisateur = async (req, res) => {
    try {
        const typeUtilisateur = await TypeUtilisateur.create(req.body);
        res.json(typeUtilisateur);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const updateTypeUtilisateur = async (req, res) => {
    try {
        const typeUtilisateur = await TypeUtilisateur.findByPk(req.params.id);
        if (typeUtilisateur) {
            typeUtilisateur.update(req.body);
            res.json(typeUtilisateur);
        } else {
            res.status(404).send({ message: 'Role not found' });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const deleteTypeUtilisateur = async (req, res) => {
    try {
        const typeUtilisateur = await TypeUtilisateur.findByPk(req.params.id);
        if (typeUtilisateur) {
            typeUtilisateur.destroy();
            res.json({ message: 'Type utilisateur supprimé' });
        } else {
            res.status(404).send({ message: 'Role not found' });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};




module.exports = {getTypeUtilisateur,getTypeUtilisateurById,createTypeUtilisateur,updateTypeUtilisateur,deleteTypeUtilisateur };