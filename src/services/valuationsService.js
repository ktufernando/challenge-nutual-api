const parse = require('date-fns/parse')
const ValuationRepository = require('../repositories/valuationsRepository');
const repository = new ValuationRepository();

const findById = async(id) => {
    return await repository.findById(id);
}

const save = async(valuation) => {
    valuation.valuation_date = parse(valuation.valuation_date, 'dd/MM/yyyy', new Date());
    return await repository.save(valuation);
}

const valuationAverageForCity = async(city) => {
    const valuationAverage = await repository.averageByCity(city);
    return valuationAverage[0];
}

const thereAreValuationsForCity = async(city) => {
    const data = await repository.thereAreValuationsForCity(city);
    return data ? true : false;
}

module.exports = {
    findById,
    save,
    valuationAverageForCity,
    thereAreValuationsForCity
}