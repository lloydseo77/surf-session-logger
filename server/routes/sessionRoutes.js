const express = require('express');
const sessionController = require('../controllers/sessionController');

const router = express.Router();

// session routes
router.get('/', sessionController.session_index);
router.post('/', sessionController.session_create_post);
router.get('/create', sessionController.session_create_get);
router.get('/:id', sessionController.session_details);
router.delete('/:id', sessionController.session_delete);

module.exports = router;