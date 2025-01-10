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
 *        description: ID of the user
 *        required: true
 *        type: integer
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