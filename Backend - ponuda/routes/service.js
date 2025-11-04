const express = require('express');
const { createService } = require('../controllers/serviceController');
const router = express.Router();

router.post('/add-service', createService);

module.exports = router;