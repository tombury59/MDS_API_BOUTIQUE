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

router.get('/typeUsers', authenticateJWT, TypeUtilisateurController.getTypeUtilisateur);

router.post('/login', UtilisateurController.login);



module.exports = router;
