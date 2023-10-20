const {Cityservice} = require ('../services');
const { StatusCodes} = require('http-status-codes');
const { SuccessResponse, ErrorResponse } = require('../utils/common');

async function createCity(req, res) {
    try {
        const airplane = await Cityservice.createcity({
          name : req.body.name
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
async function deleteCity(req, res) { 
    try { const city = await Cityservice.deleteCity(req.params.id); 
        return city; 
    } 
        catch (error) { 
            ErrorResponse.error = error; 
            return res.status(error.statusCode).json(ErrorResponse); 
        }
     }
async function updateCity(req, res) {
        try {
            const city = await Cityservice.updateCity(req.params.id, {
                name: req.body.name
            });
            SuccessResponse.data = city;
            return res
                    .status(StatusCodes.CREATED)
                    .json(SuccessResponse);
        } catch(error) {
            ErrorResponse.error = error;
            return res
                    .status(error.statusCode)
                    .json(ErrorResponse);
        }
    }
module.exports ={
    createCity,
    deleteCity,
    updateCity
}