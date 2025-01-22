const Produit = require('../models/PRODUIT');
const Ballon = require('../models/BALLON');

const getProduits = async (req, res) => {
    try {
        const produits = await Produit.findAll();
        res.json(produits);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const getProduitById = async (req, res) => {
    try {
        const produit = await Produit.findByPk(req.params.id);
        res.json(produit);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const createProduit = async (req, res) => {
    try {
        const produit = await Produit.create(req.body);
        res.json(produit);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const updateProduit = async (req, res) => {
    try {
        const produit = await Produit.findByPk(req.params.id);
        if (produit) {
            await produit.update(req.body);
            res.json(produit);
        } else {
            res.status(404).send({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const deleteProduit = async (req, res) => {
    try {
        const produit = await Produit.findByPk(req.params.id);
        if (produit) {
            await produit.destroy();
            res.json({ message: 'Product deleted' });
        } else {
            res.status(404).send({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}


module.exports = { getProduits,getProduitById,createProduit,updateProduit,deleteProduit };
