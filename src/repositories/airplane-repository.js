const CrudRepository = require('./crud-repository');
const { Airplane } = require('../models');
console.log( "inside the repo file");

class AirplaneRepository extends CrudRepository {
    constructor() {
        super(Airplane);
    }
}


module.exports = AirplaneRepository;