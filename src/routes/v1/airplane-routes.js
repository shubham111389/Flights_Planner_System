const express = require('express');
const { AirplaneController } = require('../../controllers');
const { AirplaneMiddlewares } = require('../../middlewares');

const router = express.Router();
router.post('/', 
        AirplaneMiddlewares.validateCreateRequest,
        AirplaneController.createAirplane);
// /api/v1/airplanes GET
router.get('/', 
        AirplaneController.getAirplanes);

router.get('/:id',AirplaneController.getAirplane)   ; 
router.delete('/:id', 
        AirplaneController.destroyAirplane);
router.patch("/:id", AirplaneController.updateAirplane);        
        
        module.exports =router;