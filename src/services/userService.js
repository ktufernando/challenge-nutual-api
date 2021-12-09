const ValuationRepository = require('../repositories/valuationsRepository');
const repository = new ValuationRepository();

const findById = async(id) => {
    return await repository.findById(id);
}

const save = async(user) => {
    return await repository.save(user);
}

const valuationAverageForCity = async(city) => {
    return null;
}

module.exports = {
    findById,
    save,
    valuationAverageForCity
}