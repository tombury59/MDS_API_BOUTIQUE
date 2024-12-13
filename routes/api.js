const express = require('express');
const ProduitController = require('../controllers/ProduitController');
const UtilisateurController = require('../controllers/UtilisateurController');
const router = express.Router();


router.get('/produits', ProduitController.getProduits);
router.get('/produit/:id', ProduitController.getProduitById);

router.post('/login', UtilisateurController.login);



module.exports = router;
