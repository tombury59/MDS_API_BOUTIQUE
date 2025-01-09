const jwt = require('jsonwebtoken');
const Commentaire = require('../models/COMMENTAIRE');
const secretKey = 'test';

const getCommentaires = async (req, res) => {
    try {
        const commentaires = await Commentaire.findAll();
        res.json(commentaires);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const getCommentaireById = async (req, res) => {
    try {
        const commentaire = await Commentaire.findByPk(req.params.id);
        res.json(commentaire);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const createCommentaire = async (req, res) => {
    try {
        const commentaire = await Commentaire.create(req.body);
        res.json(commentaire);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const updateCommentaire = async (req, res) => {
    try {
        const commentaire = await Commentaire.findByPk(req.params.id);
        if (commentaire) {
            commentaire.update(req.body);
            res.json(commentaire);
        } else {
            res.status(404).send({ message: 'Commentaire non trouvé' });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const deleteCommentaire = async (req, res) => {
    try {
        const commentaire = await Commentaire.findByPk(req.params.id);
        if (commentaire) {
            commentaire.destroy();
            res.json({ message: 'Commentaire supprimé' });
        } else {
            res.status(404).send({ message: 'Commentaire non trouvé' });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

module.exports = { getCommentaires, getCommentaireById, createCommentaire, updateCommentaire, deleteCommentaire };