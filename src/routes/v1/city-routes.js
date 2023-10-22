const express = require('express');
const { CityController } = require('../../controllers');
const{ CityMiddlewares}= require('../../middlewares')
const router = express.Router();
router.post('/', 
        CityMiddlewares.validateCreateRequest,
        CityController.createCity);
 router.delete("/:id", CityController.deleteCity);
 // /api/v1/cities/:id PATCH
router.patch('/:id', 
         CityMiddlewares.validateCreateRequest,
            CityController.updateCity); 
         
        
module.exports =router;