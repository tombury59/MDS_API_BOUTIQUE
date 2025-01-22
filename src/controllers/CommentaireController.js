const jwt = require('jsonwebtoken');
const Commentaire = require('../models/COMMENTAIRE');
const secretKey = 'test';

const getCommentaires = async (req, res) => {
    try {
        const { productId } = req.params; // Récupération de l'idProduit depuis les paramètres
        const commentaires = await Commentaire.findAll({ where: { idProduit: productId } }); // Filtrer par idProduit
        res.json(commentaires);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

const getCommentaireById = async (req, res) => {
    try {
        const { productId, commentId } = req.params; // Récupérer idProduit et idCommentaire depuis les paramètres
        const commentaire = await Commentaire.findOne({
            where: { idCommentaire: commentId, idProduit: productId } // Vérifier les deux conditions
        });
        if (commentaire) {
            res.json(commentaire);
        } else {
            res.status(404).send({ message: 'Commentaire non trouvé' });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

const createCommentaire = async (req, res) => {
    try {
        const { productId } = req.params; // Récupérer idProduit
        const commentaire = await Commentaire.create({ ...req.body, idProduit: productId }); // Associer le commentaire à idProduit
        res.status(201).json(commentaire);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

const updateCommentaire = async (req, res) => {
    try {
        const { productId, commentId } = req.params; // Récupérer idProduit et idCommentaire
        const commentaire = await Commentaire.findOne({
            where: { idCommentaire: commentId, idProduit: productId } // Vérifier les deux conditions
        });
        if (commentaire) {
            await commentaire.update(req.body);
            res.json(commentaire);
        } else {
            res.status(404).send({ message: 'Commentaire non trouvé' });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

const deleteCommentaire = async (req, res) => {
    try {
        const { productId, commentId } = req.params; // Récupérer idProduit et idCommentaire
        const commentaire = await Commentaire.findOne({
            where: { idCommentaire: commentId, idProduit: productId } // Vérifier les deux conditions
        });
        if (commentaire) {
            await commentaire.destroy();
            res.json({ message: 'Commentaire supprimé' });
        } else {
            res.status(404).send({ message: 'Commentaire non trouvé' });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

module.exports = { getCommentaires, getCommentaireById, createCommentaire, updateCommentaire, deleteCommentaire };
