var router = require('express').Router();

// split up route handling
router.use('/auth', require('./auth'));

module.exports = router;