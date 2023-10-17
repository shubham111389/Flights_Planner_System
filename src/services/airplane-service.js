
const {StatusCodes} = require('http-status-codes');

const { AirplaneRepository } = require('../repositories');
const AppError = require('../utils/errors/app-error');


const airplaneRepository= new AirplaneRepository();
console.log( "inside the services file");
async function createAirplane(data) {
    try {
        const airplane = await airplaneRepository.create(data);
        return airplane;
    } catch(error) {
        throw error;
    }
}
async function getAirplanes() {
    try {
        const airplanes = await airplaneRepository.getAll();
        return airplanes;
    } catch(error) {
        throw new AppError('Cannot fetch data of all the airplanes', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}
async function getAirplane(id) {
    try {
        const airplanes = await airplaneRepository.get(id);
        return airplanes;
    } catch(error) {
        throw new AppError('Cannot fetch data of all the airplanes', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function destroyAirplane(id) {
    try {
        const response = await airplaneRepository.destroy(id);
        return response;
    } catch(error) {
        if(error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('The airplane you requested to delete is not present', error.statusCode);
        }
        throw new AppError('Cannot fetch data of all the airplanes', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}




module.exports ={
    createAirplane,
    getAirplanes,
    getAirplane,
    destroyAirplane
}