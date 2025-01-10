const express = require('express');

const CommandeController = require('../controllers/CommandeController');

const authenticateJWT = require('../middleware/authenticateJWT');

const router = express.Router();

router.get('/', authenticateJWT, CommandeController.getCommandes);
router.get('/:id', authenticateJWT, CommandeController.getCommandeById);
router.post('/', authenticateJWT, CommandeController.createCommande);
router.put('/:id', authenticateJWT, CommandeController.updateCommande);
router.delete('/:id', authenticateJWT, CommandeController.deleteCommande);

module.exports = router;