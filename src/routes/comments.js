const express = require('express');

const CommentaireController = require('../controllers/CommentaireController');

const authenticateJWT = require('../middleware/authenticateJWT');

const router = express.Router();

/**
 * @swagger
 * /v0/products/{productId}/comments:
 *  get:
 *    tags:
 *      - Comments
 *    description: Use to request all comments
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/:productId/comments', authenticateJWT, CommentaireController.getCommentaires);

/**
 * @swagger
 * /v0/products/{productId}/comments/{commentId}:
 *  get:
 *    tags:
 *      - Comments
 *    description: Use to request comment by id
 *    parameters:
 *      - name: productId
 *        in: path
 *        description: ID of the product
 *        required: true
 *        type: integer
 *      - name: commentId
 *        in: path
 *        description: ID of the comment
 *        required: true
 *        type: integer
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/:productId/comments/:commentId', authenticateJWT, CommentaireController.getCommentaireById);

/**
 * @swagger
 * /v0/products/{productId}/comments:
 *  post:
 *    tags:
 *      - Comments
 *    description: Use to create a comment
 *    parameters:
 *      - name: productId
 *        in: path
 *        description: ID of the product
 *        required: true
 *        schema:
 *          type: integer
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              noteCommentaire:
 *                type: integer
 *              contenuCommentaire:
 *                type: string
 *              isVisible:
 *                type: boolean
 *              dateCreation:
 *                type: string
 *              idUtilisateur:
 *                type: integer
 *              idProduit:
 *                type: string
 *    security:
 *      - bearerAuth: []
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.post('/:productId/comments', authenticateJWT, CommentaireController.createCommentaire);

/**
 * @swagger
 * /v0/products/{productId}/comments/{commentId}:
 *  put:
 *    tags:
 *      - Comments
 *    description: Use to update a comment
 *    parameters:
 *      - name: productId
 *        in: path
 *        description: ID of the product
 *        required: true
 *        type: integer
 *      - name: commentId
 *        in: path
 *        description: ID of the comment
 *        required: true
 *        type: integer
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              noteCommentaire:
 *                type: integer
 *              contenuCommentaire:
 *                type: string
 *              isVisible:
 *                type: boolean
 *              dateCreation:
 *                type: string
 *              idUtilisateur:
 *                type: integer
 *              idProduit:
 *                type: string
 *    security:
 *      - bearerAuth: []
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.put('/:productId/comments/:commentId', authenticateJWT, CommentaireController.updateCommentaire);
/**
 * @swagger
 * /v0/products/{productId}/comments/{commentId}:
 *  delete:
 *    tags:
 *      - Comments
 *    description: Use to delete a comment
 *    parameters:
 *      - name: productId
 *        in: path
 *        description: ID of the product
 *        required: true
 *        type: integer
 *      - name: commentId
 *        in: path
 *        description: ID of the comment
 *        required: true
 *        type: integer
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.delete('/:productId/comments/:commentId', authenticateJWT, CommentaireController.deleteCommentaire);

module.exports = router;