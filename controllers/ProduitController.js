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



module.exports = { getProduits,getProduitById };
