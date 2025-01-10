const express = require('express');

const DemAffectController = require('../controllers/DemAffectController');

const authenticateJWT = require('../middleware/authenticateJWT');
const DemAffectationController = require("../controllers/DemAffectController");

const router = express.Router();

router.get('/', authenticateJWT, DemAffectationController.getDemandeAffects);
router.get('/:id', authenticateJWT, DemAffectationController.getDemandeAffectById);
router.post('/', authenticateJWT, DemAffectationController.createDemandeAffect);
router.put('/:id', authenticateJWT, DemAffectationController.updateDemandeAffect);
router.delete('/:id', authenticateJWT, DemAffectationController.deleteDemandeAffect);

module.exports = router;