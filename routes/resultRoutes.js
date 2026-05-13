const express = require('express');
const router = express.Router();
const resultController = require('../controllers/resultController');
// Unity sends a POST request to /upload
router.post('/upload', resultController.uploadResult);

module.exports = router;