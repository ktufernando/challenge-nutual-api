const parse = require("date-fns/parse");
const repository = require("../repositories/valuationsRepository");

const findById = (id) => {
  return repository.findById(id);
};

const save = (valuation) => {
  valuation.valuation_date = parse(
    valuation.valuation_date,
    "dd/MM/yyyy",
    new Date()
  );
  return repository.save(valuation);
};

const valuationAverageForCity = async (city) => {
  return repository.averageByCity(city);
};

const thereAreValuationsForCity = async (city) => {
  const data = await repository.thereAreValuationsForCity(city);
  return data ? true : false;
};

module.exports = {
  findById,
  save,
  valuationAverageForCity,
  thereAreValuationsForCity,
};
