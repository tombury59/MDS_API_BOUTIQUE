const express = require('express');

const MessageController = require('../controllers/MessageController');

const authenticateJWT = require('../middleware/authenticateJWT');

const router = express.Router();

/**
 * @swagger
 * /messages:
 *  get:
 *    tags:
 *      - Messages
 *    description: Use to request all messages
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/', authenticateJWT, MessageController.getMessages);

/**
 * @swagger
 * /messages/{id}:
 *  get:
 *    tags:
 *      - Messages
 *    description: Use to request message by id
 *    parameters:
 *      - name: id
 *        in: path
 *        description: ID of the message
 *        required: true
 *        type: integer
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/:id', authenticateJWT, MessageController.getMessageById);

/**
 * @swagger
 * /messages:
 *  post:
 *    tags:
 *      - Messages
 *    description: Use to create a message
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
 *              sujetMessage:
 *                type: string
 *              contenuMessage:
 *                type: string
 *              estLu:
 *                type: boolean
 *              dateEnvoiMessage:
 *                type: string
 *              idRecevoir:
 *                type: integer
 *              idEnvoyeur:
 *                type: integer
 *    security:
 *      - bearerAuth: []
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.post('/', authenticateJWT, MessageController.createMessage);

/**
 * @swagger
 * /messages/{id}:
 *  put:
 *    tags:
 *      - Messages
 *    description: Use to update a message
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
 *              sujetMessage:
 *                type: string
 *              contenuMessage:
 *                type: string
 *              estLu:
 *                type: boolean
 *              dateEnvoiMessage:
 *                type: string
 *              idRecevoir:
 *                type: integer
 *              idEnvoyeur:
 *                type: integer
 *    security:
 *      - bearerAuth: []
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.put('/:id', authenticateJWT, MessageController.updateMessage);

/**
 * @swagger
 * /messages/{id}:
 *  delete:
 *    tags:
 *      - Messages
 *    description: Use to delete a message
 *    parameters:
 *      - name: id
 *        in: path
 *        description: ID of the message
 *        required: true
 *        type: integer
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.delete('/:id', authenticateJWT, MessageController.deleteMessage);

module.exports = router;