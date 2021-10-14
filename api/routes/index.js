const express = require('express');
const { test } = require('../controllers/index.js');

const router = express.Router();

router.post('/test/webhook', test);

module.exports = router;
