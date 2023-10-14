const express = require('express');

const v1Routes = require('./v1');

const router = express.Router();

router.use('/v1', v1Routes);
console.log( " inside the routes ");

module.exports = router;