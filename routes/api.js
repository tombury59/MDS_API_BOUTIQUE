const express = require('express');
const ProduitController = require('../controllers/ProduitController');
const UtilisateurController = require('../controllers/UtilisateurController');
const authenticateJWT = require('../middleware/authenticateJWT');
const router = express.Router();


router.get('/produits', authenticateJWT,ProduitController.getProduits);
router.get('/produit/:id', authenticateJWT, ProduitController.getProduitById);

router.post('/login', UtilisateurController.login);



module.exports = router;
