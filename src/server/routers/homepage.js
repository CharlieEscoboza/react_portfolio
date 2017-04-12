const express = require('express');
const router = express.Router();
const { get } = require('../handlers').homepage;

router.get('/', get);

module.exports = router;
