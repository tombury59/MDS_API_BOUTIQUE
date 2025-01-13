const express = require('express');

const ProduitController = require('../controllers/ProduitController');
const CommentaireController = require("../controllers/CommentaireController");

const authenticateJWT = require('../middleware/authenticateJWT');


const router = express.Router();


/**
 * @swagger
 * /products:
 *  get:
 *    tags:
 *      - Products
 *    description: Use to request all products
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/', authenticateJWT,ProduitController.getProduits);

/**
 * @swagger
 * /products/{id}:
 *  get:
 *    tags:
 *      - Products
 *    description: Use to request product by id
 *    parameters:
 *      - name: id
 *        in: path
 *        description: ID of the product
 *        required: true
 *        type: integer
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/:id', authenticateJWT, ProduitController.getProduitById);

/**
 * @swagger
 * /products:
 *  post:
 *    tags:
 *      - Products
 *    description: Use to create a product
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              refProduit:
 *                type: string
 *              nomProduit:
 *                type: string
 *              descProduit:
 *                type: string
 *              prixHTProduit:
 *                type: integer
 *              isActif:
 *                type: boolean
 *              dateCreation:
 *                type: string
 *    security:
 *      - bearerAuth: []
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.post('/', authenticateJWT, ProduitController.createProduit);

/**
 * @swagger
 * /products/{id}:
 *  put:
 *    tags:
 *      - Products
 *    description: Use to update a product
 *    parameters:
 *      - name: id
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
 *              refProduit:
 *                type: string
 *              nomProduit:
 *                type: string
 *              descProduit:
 *                type: string
 *              prixHTProduit:
 *                type: integer
 *              isActif:
 *                type: boolean
 *              dateCreation:
 *                type: string
 *    security:
 *      - bearerAuth: []
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.put('/:id', authenticateJWT, ProduitController.updateProduit);

/**
 * @swagger
 * /products/{id}:
 *  delete:
 *    tags:
 *      - Products
 *    description: Use to delete a product
 *    parameters:
 *      - name: id
 *        in: path
 *        description: ID of the product
 *        required: true
 *        type: integer
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.delete('/:id', authenticateJWT, ProduitController.deleteProduit);

/**
 * @swagger
 * /products/{productId}/comments:
 *  get:
 *    tags:
 *      - Comments
 *    description: Use to request all comments for a product
 *    parameters:
 *      - name: productId
 *        in: path
 *        description: ID of the product
 *        required: true
 *        type: integer
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/:productId/comments', authenticateJWT, CommentaireController.getCommentaires);

/**
 * @swagger
 * /products/{productId}/comments/{commentId}:
 *  get:
 *    tags:
 *      - Comments
 *    description: Use to request a comment by id for a product
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
 * /products/{productId}/comments:
 *  post:
 *    tags:
 *      - Comments
 *    description: Use to create a comment for a product
 *    parameters:
 *      - name: productId
 *        in: path
 *        description: ID of the product
 *        required: true
 *        schema:
 *          type: integer
 *      - name: commentId
 *        in: path
 *        description: ID of the comment
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
 *                description: Rating of the comment
 *              contenuCommentaire:
 *                type: string
 *                description: Content of the comment
 *              isVisible:
 *                type: boolean
 *                description: Visibility of the comment
 *              dateCreation:
 *                type: string
 *                description: Creation date of the comment
 *              idUtilisateur:
 *                type: integer
 *                description: ID of the user
 *              idProduit:
 *                type: string
 *                description: ID of the product
 *          example:
 *            noteCommentaire: 4
 *            contenuCommentaire: "Updated comment content"
 *            isVisible: true
 *            dateCreation: "2025-01-10 10:00:00.000"
 *            idUtilisateur: 1
 *            idProduit: "QUI986"
 *    security:
 *      - bearerAuth: []
 *    responses:
 *      '200':
 *        description: A successful response
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                noteCommentaire:
 *                  type: integer
 *                contenuCommentaire:
 *                  type: string
 *                isVisible:
 *                  type: boolean
 *                dateCreation:
 *                  type: string
 *                idUtilisateur:
 *                  type: integer
 *                idProduit:
 *                  type: string
 *            example:
 *              noteCommentaire: 4
 *              contenuCommentaire: "Updated comment content"
 *              isVisible: true
 *              dateCreation: "2025-01-10 10:00:00.000"
 *              idUtilisateur: 1
 *              idProduit: "10"
 */
router.post('/:productId/comments', authenticateJWT, CommentaireController.createCommentaire);

/**
 * @swagger
 * /products/{productId}/comments/{commentId}:
 *  put:
 *    tags:
 *      - Comments
 *    description: Use to update a comment
 *    parameters:
 *      - name: productId
 *        in: path
 *        description: ID of the product
 *        required: true
 *        schema:
 *          type: integer
 *      - name: commentId
 *        in: path
 *        description: ID of the comment
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
 *                description: Rating of the comment
 *              contenuCommentaire:
 *                type: string
 *                description: Content of the comment
 *              isVisible:
 *                type: boolean
 *                description: Visibility of the comment
 *              dateCreation:
 *                type: string
 *                description: Creation date of the comment
 *              idUtilisateur:
 *                type: integer
 *                description: ID of the user
 *              idProduit:
 *                type: string
 *                description: ID of the product
 *          example:
 *            noteCommentaire: 4
 *            contenuCommentaire: "Updated comment content"
 *            isVisible: true
 *            dateCreation: "2025-01-10 10:00:00.000"
 *            idUtilisateur: 1
 *            idProduit: "QUI986"
 *    security:
 *      - bearerAuth: []
 *    responses:
 *      '200':
 *        description: A successful response
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                noteCommentaire:
 *                  type: integer
 *                contenuCommentaire:
 *                  type: string
 *                isVisible:
 *                  type: boolean
 *                dateCreation:
 *                  type: string
 *                idUtilisateur:
 *                  type: integer
 *                idProduit:
 *                  type: string
 *            example:
 *              noteCommentaire: 4
 *              contenuCommentaire: "Updated comment content"
 *              isVisible: true
 *              dateCreation: "2025-01-10 10:00:00.000"
 *              idUtilisateur: 1
 *              idProduit: "10"
 */
router.put('/:productId/comments/:commentId', authenticateJWT, CommentaireController.updateCommentaire);

/**
 * @swagger
 * /products/{productId}/comments/{commentId}:
 *  delete:
 *    tags:
 *      - Comments
 *    description: Use to delete a comment for a product
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