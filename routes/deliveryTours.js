const express = require('express');

const LivraisonController = require('../controllers/LivraisonController');

const authenticateJWT = require('../middleware/authenticateJWT');

const router = express.Router();

/**
 * @swagger
 * /delivery-tours:
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
 * /delivery-tours/{id}:
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
 * /delivery-tours:
 *  post:
 *    tags:
 *      - Delivery Tours
 *    description: Use to create a delivery tour
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.post('/', authenticateJWT, LivraisonController.createLivraison);

/**
 * @swagger
 * /delivery-tours/{id}:
 *  put:
 *    tags:
 *      - Delivery Tours
 *    description: Use to update a delivery tour
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
router.put('/:id', authenticateJWT, LivraisonController.updateLivraison);

/**
 * @swagger
 * /delivery-tours/{id}:
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