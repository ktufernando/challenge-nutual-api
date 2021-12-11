const Valuation = require("../models/valuation");
const AppError = require("../errors/appError");
class ValuationRepository {
  constructor() {}

  findAll() {
    return Valuation.find();
  }

  findById(id) {
    return Valuation.findById(id);
  }

  save(valuation) {
    return Valuation.create(valuation);
  }

  update(id, valuation) {
    return Valuation.findByIdAndUpdate(id, valuation, { new: true });
  }

  remove(id) {
    return Valuation.findByIdAndRemove(id);
  }

  averageByCity(city) {
    return Valuation.aggregate([
      { $match: { city: { $regex: city, $options: "i" } } },
      {
        $group: {
          _id: "$city",
          average: { $avg: "$price_m2" },
          count: { $sum: 1 },
        },
      },
    ]).exec();
  }

  thereAreValuationsForCity(city) {
    return Valuation.findOne({ city: { $regex: city, $options: "i" } })
      .select("_id")
      .lean();
  }
}

module.exports = new ValuationRepository();
