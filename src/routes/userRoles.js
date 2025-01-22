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
 * /v0/roles/{id}:
 *  get:
 *    tags:
 *      - Roles
 *    description: Use to request role by id
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
router.get('/role/:id', authenticateJWT, TypeUtilisateurController.getTypeUtilisateurById);

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

