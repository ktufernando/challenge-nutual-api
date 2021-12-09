const Valuation = require('../models/valuation');
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
}

module.exports = ValuationRepository;