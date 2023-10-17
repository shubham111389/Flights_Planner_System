const express = require('express');
const { AirplaneController } = require('../../controllers');
const { getAirplane } = require('../../controllers/airplane-controller');
const router = express.Router();
router.post('/',  AirplaneController.createAirplane);
// /api/v1/airplanes GET
router.get('/', 
        AirplaneController.getAirplanes);

router.get('/:id',AirplaneController.getAirplane)   ; 
router.delete('/:id', 
        AirplaneController.destroyAirplane);
        
        module.exports =router;