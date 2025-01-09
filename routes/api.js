const express = require('express');

const ProduitController = require('../controllers/ProduitController');
const TypeUtilisateurController = require('../controllers/TypeUtilisateurController');
const UtilisateurController = require('../controllers/UtilisateurController');
const CommentaireController = require('../controllers/CommentaireController');

const authenticateJWT = require('../middleware/authenticateJWT');

const router = express.Router();


router.get('/produits', authenticateJWT,ProduitController.getProduits);
router.get('/produit/:id', authenticateJWT, ProduitController.getProduitById);
router.post('/produit', authenticateJWT, ProduitController.createProduit);
router.put('/produit/:id', authenticateJWT, ProduitController.updateProduit);
router.delete('/produit/:id', authenticateJWT, ProduitController.deleteProduit);


router.get('/users', authenticateJWT, UtilisateurController.getUsers);
router.get('/users/:id', authenticateJWT, UtilisateurController.getUserById);
router.get('/users/role/:id', authenticateJWT, UtilisateurController.getUserByType);
router.post('/users', authenticateJWT, UtilisateurController.createUser);
router.put('/users/:id', authenticateJWT, UtilisateurController.updateUser);
router.delete('/users/:id', authenticateJWT, UtilisateurController.deleteUser);


router.get('/commentaires', authenticateJWT, CommentaireController.getCommentaires);
router.get('/commentaires/:id', authenticateJWT, CommentaireController.getCommentaireById);
router.post('/commentaires', authenticateJWT, CommentaireController.createCommentaire);
router.put('/commentaires/:id', authenticateJWT, CommentaireController.updateCommentaire);
router.delete('/commentaires/:id', authenticateJWT, CommentaireController.deleteCommentaire);



router.get('/typeUsers', authenticateJWT, TypeUtilisateurController.getTypeUtilisateur);


router.post('/login', UtilisateurController.login);



module.exports = router;
