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
module.exports ={
    createCity
}