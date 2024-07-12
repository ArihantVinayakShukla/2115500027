const express = require('express');
const router = express.Router();
const numberController = require('../controllers/numberController.js');

router.get('/:type', numberController.getNumbers);

module.exports = router;
