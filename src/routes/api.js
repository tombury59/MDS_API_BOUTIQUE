const express = require('express');


const TypeUtilisateurController = require('../controllers/TypeUtilisateurController');
const UtilisateurController = require('../controllers/UtilisateurController');


const authenticateJWT = require('../middleware/authenticateJWT');
const router = express.Router();

router.get('/typeUsers', authenticateJWT, TypeUtilisateurController.getTypeUtilisateur);

/**
 * @swagger
 * /v0/api/login:
 *  post:
 *    tags:
 *      - Utilisateur
 *    description: Use to log in a user
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              email:
 *                type: string
 *                description: Email of the user
 *              password:
 *                type: string
 *                description: Password of the user
 *            required:
 *              - email
 *              - password
 *    responses:
 *      200:
 *        description: A successful response
 */
router.post('/login', UtilisateurController.login);



module.exports = router;
