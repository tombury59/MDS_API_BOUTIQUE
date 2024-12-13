const express = require('express');
const ProduitController = require('../controllers/ProduitController');
const router = express.Router();

router.get('/produits', ProduitController.getProduits);
router.get('/produit/:id', ProduitController.getProduitById);

module.exports = router;
