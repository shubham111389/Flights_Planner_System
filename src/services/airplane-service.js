
const {AirplaneRepository} = require('../repositories')
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



module.exports ={
    createAirplane
}