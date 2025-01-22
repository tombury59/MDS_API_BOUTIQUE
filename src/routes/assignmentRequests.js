const express = require('express');
const authenticateJWT = require('../middleware/authenticateJWT');
const DemAffectationController = require("../controllers/DemAffectController");

const router = express.Router();

/**
 * @swagger
 * /v0/assignment-requests:
 *  get:
 *    tags:
 *      - Assignment Requests
 *    description: Use to request all assignment requests
 *    security:
 *      - bearerAuth: []
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/', authenticateJWT, DemAffectationController.getDemandeAffects);

/**
 * @swagger
 * /v0/assignment-requests/{id}:
 *  get:
 *    tags:
 *      - Assignment Requests
 *    description: Use to request assignment request by id
 *    parameters:
 *      - name: id
 *        in: path
 *        description: ID of the assignment request
 *        required: true
 *        type: integer
 *    security:
 *      - bearerAuth: []
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/:id', authenticateJWT, DemAffectationController.getDemandeAffectById);

/**
 * @swagger
 * /v0/assignment-requests:
 *  post:
 *    tags:
 *      - Assignment Requests
 *    description: Use to create an assignment request
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              statutDemande:
 *                type: string
 *              dateDemande:
 *                type: string
 *              idResponsable:
 *                type: integer
 *              idUtilisateur:
 *                type: integer
 *    security:
 *      - bearerAuth: []
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.post('/', authenticateJWT, DemAffectationController.createDemandeAffect);

/**
 * @swagger
 * /v0/assignment-requests/{id}:
 *  put:
 *    tags:
 *      - Assignment Requests
 *    description: Use to update an assignment request
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
 *              statutDemande:
 *                type: string
 *              dateDemande:
 *                type: string
 *              idResponsable:
 *                type: integer
 *              idUtilisateur:
 *                type: integer
 *    security:
 *      - bearerAuth: []
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.put('/:id', authenticateJWT, DemAffectationController.updateDemandeAffect);

/**
 * @swagger
 * /v0/assignment-requests/{id}:
 *  delete:
 *    tags:
 *      - Assignment Requests
 *    description: Use to delete an assignment request
 *    parameters:
 *      - name: id
 *        in: path
 *        description: ID of the assignment request
 *        required: true
 *        type: integer
 *    security:
 *      - bearerAuth: []
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.delete('/:id', authenticateJWT, DemAffectationController.deleteDemandeAffect);

module.exports = router;