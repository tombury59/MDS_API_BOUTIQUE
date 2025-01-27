const jwt = require('jsonwebtoken');
const DemandeAffect = require('../models/DEMANDE_AFFECTATION');
const secretKey = 'test';

const getDemandeAffects = async (req, res) => {
    try {
        const demandeAffects = await DemandeAffect.findAll();
        if (demandeAffects.length === 0) {
            res.status(404).send({ message: "Assignement-request not found" });
        }
        res.json(demandeAffects);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const getDemandeAffectById = async (req, res) => {
    try {
        const demandeAffect = await DemandeAffect.findByPk(req.params.id);
        if (demandeAffect === null){
            res.status(404).send({ message: "Assignement-request not found" });
        }
        res.json(demandeAffect);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const createDemandeAffect = async (req, res) => {
    try {
        const demandeAffect = await DemandeAffect.create(req.body);
        res.json(demandeAffect);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const updateDemandeAffect = async (req, res) => {
    try {
        const demandeAffect = await DemandeAffect.findByPk(req.params.id);
        if (demandeAffect) {
            demandeAffect.update(req.body);
            res.json(demandeAffect);
        } else {
            res.status(404).send({ message: "Assignement-request not found" });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const deleteDemandeAffect = async (req, res) => {
    try {
        const demandeAffect = await DemandeAffect.findByPk(req.params.id);
        if (demandeAffect) {
            demandeAffect.destroy();
            res.json({ message: "Assignement-request deleted" });
        } else {
            res.status(404).send({ message: "Assignement-request not found" });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

module.exports = { getDemandeAffects, getDemandeAffectById, createDemandeAffect, updateDemandeAffect, deleteDemandeAffect };