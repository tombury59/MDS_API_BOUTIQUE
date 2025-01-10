const express = require('express');

const LivraisonController = require('../controllers/LivraisonController');

const authenticateJWT = require('../middleware/authenticateJWT');

const router = express.Router();

router.get('/', authenticateJWT, LivraisonController.getLivraisons);
router.get('/:id', authenticateJWT, LivraisonController.getLivraisonById);
router.post('/', authenticateJWT, LivraisonController.createLivraison);
router.put('/:id', authenticateJWT, LivraisonController.updateLivraison);
router.delete('/:id', authenticateJWT, LivraisonController.deleteLivraison);

module.exports = router;