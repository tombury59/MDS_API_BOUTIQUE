const express = require('express');

const ProduitController = require('../controllers/ProduitController');
const CommentaireController = require("../controllers/CommentaireController");

const authenticateJWT = require('../middleware/authenticateJWT');


const router = express.Router();



router.get('/', authenticateJWT,ProduitController.getProduits);
router.get('/:id', authenticateJWT, ProduitController.getProduitById);
router.post('/', authenticateJWT, ProduitController.createProduit);
router.put('/:id', authenticateJWT, ProduitController.updateProduit);
router.delete('/:id', authenticateJWT, ProduitController.deleteProduit);

router.get('/:productId/comments', authenticateJWT, CommentaireController.getCommentaires);
router.get('/:productId/comments/:commentId', authenticateJWT, CommentaireController.getCommentaireById);
router.post('/:productId/comments', authenticateJWT, CommentaireController.createCommentaire);
router.put('/:productId/comments/:commentId', authenticateJWT, CommentaireController.updateCommentaire);
router.delete('/:productId/comments/:commentId', authenticateJWT, CommentaireController.deleteCommentaire);

module.exports = router;