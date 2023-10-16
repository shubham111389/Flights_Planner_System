const express = require('express');
const { AirplaneController } = require('../../controllers');
const router = express.Router();
router.post('/',  AirplaneController.createAirplane);
router.get ( '/', AirplaneController.getAirplanes);

module.exports =router;