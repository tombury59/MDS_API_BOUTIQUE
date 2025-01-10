const express = require('express');

const ProduitController = require('../controllers/ProduitController');
const TypeUtilisateurController = require('../controllers/TypeUtilisateurController');
const UtilisateurController = require('../controllers/UtilisateurController');
const CommentaireController = require('../controllers/CommentaireController');
const MessageController = require('../controllers/MessageController');
const DemAffectationController = require('../controllers/DemAffectController');
const CommandeController = require('../controllers/CommandeController');
const LivraisonController = require('../controllers/LivraisonController');

const authenticateJWT = require('../middleware/authenticateJWT');

const router = express.Router();


// router.get('/products', authenticateJWT,ProduitController.getProduits);
// router.get('/products/:id', authenticateJWT, ProduitController.getProduitById);
// router.post('/products', authenticateJWT, ProduitController.createProduit);
// router.put('/products/:id', authenticateJWT, ProduitController.updateProduit);
// router.delete('/products/:id', authenticateJWT, ProduitController.deleteProduit);
//
// router.get('/users', authenticateJWT, UtilisateurController.getUsers);
// router.get('/users/:id', authenticateJWT, UtilisateurController.getUserById);
// router.get('/users/role/:id', authenticateJWT, UtilisateurController.getUserByType);
// router.post('/users', authenticateJWT, UtilisateurController.createUser);
// router.put('/users/:id', authenticateJWT, UtilisateurController.updateUser);
// router.delete('/users/:id', authenticateJWT, UtilisateurController.deleteUser);
//
//
// router.get('/products/:productId/comments', authenticateJWT, CommentaireController.getCommentaires);
// router.get('/products/:productId/comments/:commentId', authenticateJWT, CommentaireController.getCommentaireById);
// router.post('/products/:productId/comments', authenticateJWT, CommentaireController.createCommentaire);
// router.put('/products/:productId/comments/:commentId', authenticateJWT, CommentaireController.updateCommentaire);
// router.delete('/products/:productId/comments/:commentId', authenticateJWT, CommentaireController.deleteCommentaire);
//
// router.get('/messages', authenticateJWT, MessageController.getMessages);
// router.get('/messages/:id', authenticateJWT, MessageController.getMessageById);
// router.post('/messages', authenticateJWT, MessageController.createMessage);
// router.put('/messages/:id', authenticateJWT, MessageController.updateMessage);
// router.delete('/messages/:id', authenticateJWT, MessageController.deleteMessage);
//
// router.get('/assignment-requests', authenticateJWT, DemAffectationController.getDemandeAffects);
// router.get('/assignment-requests/:id', authenticateJWT, DemAffectationController.getDemandeAffectById);
// router.post('/assignment-requests', authenticateJWT, DemAffectationController.createDemandeAffect);
// router.put('/assignment-requests/:id', authenticateJWT, DemAffectationController.updateDemandeAffect);
// router.delete('/assignment-requests/:id', authenticateJWT, DemAffectationController.deleteDemandeAffect);
//
//
//
//
// router.get('/orders', authenticateJWT, CommandeController.getCommandes);
// router.get('/orders/:id', authenticateJWT, CommandeController.getCommandeById);
// router.post('/orders', authenticateJWT, CommandeController.createCommande);
// router.put('/orders/:id', authenticateJWT, CommandeController.updateCommande);
// router.delete('/orders/:id', authenticateJWT, CommandeController.deleteCommande);
//
// router.get('/delivery-tours', authenticateJWT, LivraisonController.getLivraisons);
// router.get('/delivery-tours/:id', authenticateJWT, LivraisonController.getLivraisonById);
// router.post('/delivery-tours', authenticateJWT, LivraisonController.createLivraison);
// router.put('/delivery-tours/:id', authenticateJWT, LivraisonController.updateLivraison);
// router.delete('/delivery-tours/:id', authenticateJWT, LivraisonController.deleteLivraison);



router.get('/typeUsers', authenticateJWT, TypeUtilisateurController.getTypeUtilisateur);


router.post('/login', UtilisateurController.login);



module.exports = router;
