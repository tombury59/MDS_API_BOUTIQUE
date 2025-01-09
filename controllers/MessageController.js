const jwt = require('jsonwebtoken');
const Message = require('../models/MESSAGE');
const secretKey = 'test';

const getMessages = async (req, res) => {
    try {
        const messages = await Message.findAll();
        res.json(messages);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const getMessageById = async (req, res) => {
    try {
        const message = await Message.findByPk(req.params.id);
        res.json(message);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const createMessage = async (req, res) => {
    try {
        const message = await Message.create(req.body);
        res.json(message);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const updateMessage = async (req, res) => {
    try {
        const messages = await Message.findByPk(req.params.id);
        if (messages) {
            messages.update(req.body);
            res.json(messages);
        } else {
            res.status(404).send({ message: 'Commentaire non trouvé' });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const deleteMessage = async (req, res) => {
    try {
        const messages = await Message.findByPk(req.params.id);
        if (messages) {
            messages.destroy();
            res.json({ message: 'Commentaire supprimé' });
        } else {
            res.status(404).send({ message: 'Commentaire non trouvé' });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

module.exports = { getMessages, getMessageById, createMessage, updateMessage, deleteMessage };