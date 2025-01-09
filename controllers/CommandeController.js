const jwt = require('jsonwebtoken');
const Commande = require('../models/COMMANDE');
const secretKey = 'test';

const getCommandes = async (req, res) => {
    try {
        const commandes = await Commande.findAll();
        res.json(commandes);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const getCommandeById = async (req, res) => {
    try {
        const commande = await Commande.findByPk(req.params.id);
        res.json(commande);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const createCommande = async (req, res) => {
    try {
        const commande = await Commande.create(req.body);
        res.json(commande);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const updateCommande = async (req, res) => {
    try {
        const commande = await Commande.findByPk(req.params.id);
        if (commande) {
            commande.update(req.body);
            res.json(commande);
        } else {
            res.status(404).send({ message: 'Commande non trouvé' });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const deleteCommande = async (req, res) => {
    try {
        const commande = await Commande.findByPk(req.params.id);
        if (commande) {
            commande.destroy();
            res.json({ message: 'Commande supprimé' });
        } else {
            res.status(404).send({ message: 'Commande non trouvé' });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

module.exports = {getCommandes, getCommandeById, createCommande, updateCommande, deleteCommande};