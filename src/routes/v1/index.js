const express = require('express');

const { InfoController } = require('../../controllers');
const airplaneRoutes = require('./airplane-routes');
const cityRoutes = require ('./city-routes');
const airportRoutes= require('./airport-routes')

const router = express.Router();
router.use('/airplanes', airplaneRoutes);
router.get('/info', InfoController.info);
router.use ('/cities',cityRoutes );
router.use('/airports', airportRoutes);


module.exports = router;