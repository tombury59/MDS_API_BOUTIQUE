const express = require('express');

const CommentaireController = require('../controllers/CommentaireController');

const authenticateJWT = require('../middleware/authenticateJWT');

const router = express.Router();

router.get('/:productId/comments', authenticateJWT, CommentaireController.getCommentaires);
router.get('/:productId/comments/:commentId', authenticateJWT, CommentaireController.getCommentaireById);
router.post('/:productId/comments', authenticateJWT, CommentaireController.createCommentaire);
router.put('/:productId/comments/:commentId', authenticateJWT, CommentaireController.updateCommentaire);
router.delete('/:productId/comments/:commentId', authenticateJWT, CommentaireController.deleteCommentaire);

module.exports = router;