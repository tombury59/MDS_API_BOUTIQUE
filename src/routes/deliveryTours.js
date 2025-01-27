const express = require('express');

const LivraisonController = require('../controllers/LivraisonController');

const authenticateJWT = require('../middleware/authenticateJWT');

const router = express.Router();

/**
 * @swagger
 * /v0/delivery-tours:
 *  get:
 *    tags:
 *      - Delivery Tours
 *    description: Use to request all delivery tours
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/', authenticateJWT, LivraisonController.getLivraisons);

/**
 * @swagger
 * /v0/delivery-tours/{id}:
 *  get:
 *    tags:
 *      - Delivery Tours
 *    description: Use to request delivery tour by id
 *    parameters:
 *      - name: id
 *        in: path
 *        description: ID of the delivery tour
 *        required: true
 *        type: integer
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/:id', authenticateJWT, LivraisonController.getLivraisonById);

/**
 * @swagger
 * /v0/delivery-tours:
 *  post:
 *    tags:
 *      - Delivery Tours
 *    description: Use to create a delivery tour
 *    parameters:
 *      - name: idLivraison
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
 *              statutLivraison:
 *                type: string
 *              datePrevu:
 *                type: string
 *              dateLivraison:
 *                type: integer
 *              IdLivreur:
 *                type: integer
 *              idCommande::
 *                type: integer
 *    security:
 *      - bearerAuth: []
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.post('/', authenticateJWT, LivraisonController.createLivraison);

/**
 * @swagger
 * /v0/delivery-tours/{id}:
 *  put:
 *    tags:
 *      - Delivery Tours
 *    description: Use to update a delivery tour
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
 *              statutLivraison:
 *                type: string
 *              datePrevu:
 *                type: string
 *              dateLivraison:
 *                type: integer
 *              IdLivreur:
 *                type: integer
 *              idCommande::
 *                type: integer
 *    security:
 *      - bearerAuth: []
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.put('/:id', authenticateJWT, LivraisonController.updateLivraison);

/**
 * @swagger
 * /v0/delivery-tours/{id}:
 *  delete:
 *    tags:
 *      - Delivery Tours
 *    description: Use to delete a delivery tour
 *    parameters:
 *      - name: id
 *        in: path
 *        description: ID of the delivery tour
 *        required: true
 *        type: integer
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.delete('/:id', authenticateJWT, LivraisonController.deleteLivraison);

module.exports = router;