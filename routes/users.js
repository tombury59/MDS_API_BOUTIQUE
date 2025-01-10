const express = require('express');

const UtilisateurController = require("../controllers/UtilisateurController");

const authenticateJWT = require('../middleware/authenticateJWT');

const router = express.Router();



router.get('/', authenticateJWT, UtilisateurController.getUsers);
router.get('/:id', authenticateJWT, UtilisateurController.getUserById);
router.get('/role/:id', authenticateJWT, UtilisateurController.getUserByType);
router.post('', authenticateJWT, UtilisateurController.createUser);
router.put('/:id', authenticateJWT, UtilisateurController.updateUser);
router.delete('/:id', authenticateJWT, UtilisateurController.deleteUser);

module.exports = router;