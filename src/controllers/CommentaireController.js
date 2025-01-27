const jwt = require('jsonwebtoken');
const Commentaire = require('../models/COMMENTAIRE');
const secretKey = 'test';

const getCommentaires = async (req, res) => {
    try {
        const { productId } = req.params; // Récupération de l'idProduit depuis les paramètres
        const commentaires = await Commentaire.findAll({ where: { idProduit: productId } }); // Filtrer par idProduit
        if (commentaires.length === 0) {
            res.status(404).send({ message: 'Comments not found' });
        }
        res.json(commentaires);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

const getCommentaireById = async (req, res) => {
    try {
        const { productId, commentId } = req.params;
        const commentaire = await Commentaire.findOne({
            where: { idCommentaire: commentId, idProduit: productId }
        });
        if (commentaire) {
            res.json(commentaire);
        } else {
            res.status(404).send({ message: 'Comment not found' });
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
            res.status(404).send({ message: 'Comment not found' });
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
            res.json({ message: 'Comment deleted' });
        } else {
            res.status(404).send({ message: 'Comment not found' });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

module.exports = { getCommentaires, getCommentaireById, createCommentaire, updateCommentaire, deleteCommentaire };
