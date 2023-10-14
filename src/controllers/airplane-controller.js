const {Airplaneservice} = require ('../services');
console.log( "inside the airplane controller  file");
const { StatusCodes} = require('http-status-codes');

async function createAirplane(req, res) {
    try {
        console.log( req.body);
        const airplane = await Airplaneservice.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        });
       
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

module.exports= {
    createAirplane
}