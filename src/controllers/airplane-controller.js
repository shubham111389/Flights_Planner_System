const {Airplaneservice} = require ('../services');
const { StatusCodes} = require('http-status-codes');
const { SuccessResponse, ErrorResponse } = require('../utils/common');


async function createAirplane(req, res) {
    try {
        console.log( req.body);
        const airplane = await Airplaneservice.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        });
        SuccessResponse.data=airplane;

        return res
                .status(StatusCodes.CREATED)
                .json
                ({
                success : true,
                message : 'succesfully create an airplane ',
                data :'airplane'
                }
                );
    } catch(error) {
        
        return res
                .status(StatusCodes.INTERNAL_SERVER_ERROR)
                .json({
                    success :false,
                    error : error
                }
                );
    }
}
async function getAirplanes(req, res) {
    try {
        const airplanes = await Airplaneservice.getAirplanes();
        SuccessResponse.data = airplanes;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
    } catch(error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}

async function getAirplane(req, res) {
    try {
        const airplane = await Airplaneservice.getAirplane(req.params.id);
        SuccessResponse.data = airplane;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
    } catch(error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}
async function destroyAirplane(req, res) {
    try {
        const airplanes = await Airplaneservice.destroyAirplane(req.params.id);
        SuccessResponse.data = airplanes;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
    } catch(error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}

module.exports= {
    createAirplane,
    getAirplanes,
    getAirplane,
    destroyAirplane
}