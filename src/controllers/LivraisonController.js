const jwt = require('jsonwebtoken');
const Livraison = require('../models/LIVRAISON');
const secretKey = 'test';

const getLivraisons = async (req, res) => {
    try {
        const livraison = await Livraison.findAll();
        if (livraison.length === 0) {
            res.status(404).send({ message: 'Deliveries not found' });
        }
        res.json(livraison);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const getLivraisonById = async (req, res) => {
    try {
        const livraison = await Livraison.findByPk(req.params.id);
        if (livraison === null) {
            res.status(404).send({ message: 'Delivery not found' });
        }
        res.json(livraison);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const createLivraison = async (req, res) => {
    try {
        const livraison = await Livraison.create(req.body);
        res.json(livraison);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const updateLivraison = async (req, res) => {
    try {
        const livraison = await Livraison.findByPk(req.params.id);
        if (livraison) {
            livraison.update(req.body);
            res.json(livraison);
        } else {
            res.status(404).send({ message: 'Delivery not found' });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const deleteLivraison = async (req, res) => {
    try {
        const livraison = await Livraison.findByPk(req.params.id);
        if (livraison) {
            livraison.destroy();
            res.json({ message: 'Delivery deleted' });
        } else {
            res.status(404).send({ message: 'Delivery not found' });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

module.exports = { getLivraisons, getLivraisonById, createLivraison, updateLivraison, deleteLivraison };