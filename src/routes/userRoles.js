const express = require('express');

const TypeUtilisateurController = require("../controllers/TypeUtilisateurController");

const authenticateJWT = require('../middleware/authenticateJWT');

const router = express.Router();

/**
 * @swagger
 * /v0/roles:
 *  get:
 *    tags:
 *      - Roles
 *    description: Use to request all roles
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/', authenticateJWT, TypeUtilisateurController.getTypeUtilisateur);


/**
 * @swagger
 * /v0/roles/{idType}:
 *  get:
 *    tags:
 *      - Roles
 *    description: Use to request role by id
 *    parameters:
 *      - name: idType
 *        in: path
 *        description: ID of the role
 *        required: true
 *        type: integer
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/:id', authenticateJWT, TypeUtilisateurController.getTypeUtilisateurById);

/**
 * @swagger
 * /v0/roles:
 *  post:
 *    tags:
 *      - Roles
 *    description: Use to create a role
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              nomType:
 *                type: string
 *    responses:
 *      '201':
 *        description: Role created successfully
 */

router.post('/', authenticateJWT, TypeUtilisateurController.createTypeUtilisateur);

/**
 * @swagger
 * /v0/roles/{id}:
 *  put:
 *    tags:
 *      - Roles
 *    description: Use to update a role
 *    parameters:
 *      - name: id
 *        in: path
 *        description: ID of the role
 *        required: true
 *        type: integer
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              nomType:
 *                type: string
 *    responses:
 *      '200':
 *        description: Role updated successfully
 */
router.put('/:id', authenticateJWT, TypeUtilisateurController.updateTypeUtilisateur);

/**
 * @swagger
 * /v0/roles/{id}:
 *  delete:
 *    tags:
 *      - Roles
 *    description: Use to delete a role
 *    parameters:
 *      - name: id
 *        in: path
 *        description: ID of the role
 *        required: true
 *        type: integer
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.delete('/:id', authenticateJWT, TypeUtilisateurController.deleteTypeUtilisateur);

module.exports = router;