const express = require('express');

const CommandeController = require('../controllers/CommandeController');

const authenticateJWT = require('../middleware/authenticateJWT');

const router = express.Router();

/**
 * @swagger
 * /orders:
 *  get:
 *    tags:
 *      - Orders
 *    description: Use to request all orders
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/', authenticateJWT, CommandeController.getCommandes);

/**
 * @swagger
 * /orders/{id}:
 *  get:
 *    tags:
 *      - Orders
 *    description: Use to request order by id
 *    parameters:
 *      - name: id
 *        in: path
 *        description: ID of the order
 *        required: true
 *        type: integer
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/:id', authenticateJWT, CommandeController.getCommandeById);

/**
 * @swagger
 * /orders:
 *  post:
 *    tags:
 *      - Orders
 *    description: Use to create an order
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.post('/', authenticateJWT, CommandeController.createCommande);

/**
 * @swagger
 * /orders/{id}:
 *  put:
 *    tags:
 *      - Orders
 *    description: Use to update an order
 *    parameters:
 *      - name: id
 *        in: path
 *        description: ID of the order
 *        required: true
 *        type: integer
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.put('/:id', authenticateJWT, CommandeController.updateCommande);

/**
 * @swagger
 * /orders/{id}:
 *  delete:
 *    tags:
 *      - Orders
 *    description: Use to delete an order
 *    parameters:
 *      - name: id
 *        in: path
 *        description: ID of the order
 *        required: true
 *        type: integer
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.delete('/:id', authenticateJWT, CommandeController.deleteCommande);

module.exports = router;