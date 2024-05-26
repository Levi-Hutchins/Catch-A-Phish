const express = require('express');
const linkRoutes = require('./linkRoutes');
const emailRoutes = require('./emailRoutes');

const router = express.Router();

router.use('/link', linkRoutes);
router.use('/mail', emailRoutes);

module.exports = router;