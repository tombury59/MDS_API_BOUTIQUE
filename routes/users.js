const express = require('express');

const UtilisateurController = require("../controllers/UtilisateurController");

const authenticateJWT = require('../middleware/authenticateJWT');

const router = express.Router();


/**
 * @swagger
 * /users:
 *  get:
 *    tags:
 *      - Users
 *    description: Use to request all users
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/', authenticateJWT, UtilisateurController.getUsers);

/**
 * @swagger
 * /users/{id}:
 *  get:
 *    tags:
 *      - Users
 *    description: Use to request user by id
 *    parameters:
 *      - name: id
 *        in: path
 *        description: ID of the user
 *        required: true
 *        type: integer
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/:id', authenticateJWT, UtilisateurController.getUserById);

/**
 * @swagger
 * /users/role/{id}:
 *  get:
 *    tags:
 *      - Users
 *    description: Use to request user by type
 *    parameters:
 *      - name: id
 *        in: path
 *        description: ID of the user
 *        required: true
 *        type: integer
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/role/:id', authenticateJWT, UtilisateurController.getUserByType);

/**
 * @swagger
 * /users:
 *  post:
 *    tags:
 *      - Users
 *    description: Use to create a user
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              emailUtilisateur:
 *                type: string
 *              nomUtilisateur:
 *                type: string
 *              mdpUtilisateur:
 *                type: string
 *              prenomUtilisateur:
 *                type: string
 *              telUtilisateur:
 *                type: string
 *              isActif:
 *                type: boolean
 *              dateCreation:
 *                type: string
 *              idResponsable:
 *                type: integer
 *              idType:
 *                type: integer
 *          example:
 *            emailUtilisateur: "tombury59@hotmail.com"
 *            nomUtilisateur: "Bury"
 *            mdpUtilisateur: "1234"
 *            prenomUtilisateur: "Tom"
 *            telUtilisateur: "0642107741"
 *            isActif: true
 *            dateCreation: "2025-01-09 14:35:36.730"
 *            idResponsable: 10
 *            idType: 12
 *    security:
 *      - bearerAuth: []
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.post('', authenticateJWT, UtilisateurController.createUser);

/**
 * @swagger
 * /users/{id}:
 *  put:
 *    tags:
 *      - Users
 *    description: Use to update a user
 *    parameters:
 *      - name: id
 *        in: path
 *        description: ID of the assignment request
 *        required: true
 *        type: integer
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              emailUtilisateur:
 *                type: string
 *              nomUtilisateur:
 *                type: string
 *              mdpUtilisateur:
 *                type: string
 *              prenomUtilisateur:
 *                type: string
 *              telUtilisateur:
 *                type: string
 *              isActif:
 *                type: boolean
 *              dateCreation:
 *                  type: string
 *              idResponsable:
 *                  type: integer
 *              idType:
 *                  type: integer
 *    security:
 *      - bearerAuth: []
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.put('/:id', authenticateJWT, UtilisateurController.updateUser);

/**
 * @swagger
 * /users/{id}:
 *  delete:
 *    tags:
 *      - Users
 *    description: Use to delete a user
 *    parameters:
 *      - name: id
 *        in: path
 *        description: ID of the user
 *        required: true
 *        type: integer
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.delete('/:id', authenticateJWT, UtilisateurController.deleteUser);

module.exports = router;