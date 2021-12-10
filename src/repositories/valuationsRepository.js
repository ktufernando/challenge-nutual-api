const Valuation = require('../models/valuation');
const AppError = require('../errors/appError');
class ValuationRepository {

    constructor(){

    }


    async findAll(){
        return await Valuation.find();
    }

    async findById(id) {
        return await Valuation.findById(id);
    }

    async save(valuation) {
        return await Valuation.create(valuation);
    }

    async update(id, valuation){
        return await Valuation.findByIdAndUpdate(id, valuation, {new : true});
    }

    async remove(id) {
        return await Valuation.findByIdAndRemove(id);
    }

    async averageByCity(city) {

        return await Valuation.aggregate([
            { $match: { city: { $regex: city, $options:'i' } } },
            { $group: { _id: '$city', average: { $avg: '$priceM2' } } },
          ]).exec();
    }

    async thereAreValuationsForCity(city){
        return await Valuation.findOne({ city: { $regex: city, $options:'i' } }).select("_id").lean();
    }
}

module.exports = ValuationRepository;