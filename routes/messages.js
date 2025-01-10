const express = require('express');

const MessageController = require('../controllers/MessageController');

const authenticateJWT = require('../middleware/authenticateJWT');

const router = express.Router();

router.get('/', authenticateJWT, MessageController.getMessages);
router.get('/:id', authenticateJWT, MessageController.getMessageById);
router.post('/', authenticateJWT, MessageController.createMessage);
router.put('/:id', authenticateJWT, MessageController.updateMessage);
router.delete('/:id', authenticateJWT, MessageController.deleteMessage);

module.exports = router;