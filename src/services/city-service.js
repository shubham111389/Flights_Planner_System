const {StatusCodes} = require('http-status-codes');

const { CityRepository } = require('../repositories');
const AppError = require('../utils/errors/app-error');

const cityRepository= new CityRepository()
async function createcity(data) {
    try {
        const city = await cityRepository.create(data);
        return city;
    } catch(error) {
        throw error;
    }
}
module.exports={
    createcity
}