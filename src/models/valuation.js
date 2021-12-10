const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;
 
const valuationSchema = new Schema({
        address: {
            type: String
        },
        latitude: {
            type: Number,
            required: [true, 'Latitude required']
        },
        longitude: {
            type: Number,
            required: [true, 'Longitude required'],
        },
        zipcode: String,
        city: {
            type: String,
            required: [true, 'City required'],
            index: true
        },
        year_of_construction: Number,
        year_of_renovation: Number,
        total_price: Number,
        total_area: Number,
        price_m2: {
            type: Number,
            required: [true, 'Price M2 required'],
        },
        has_elevator: {
            type: Boolean,
            default: false
        },
        valuation_date: Date
    },
    {timestamps: true}
);

valuationSchema.index({ latitude: 1, longitude: 1}, { unique: true });
valuationSchema.index({ address: 1, zipcode: 1, city: 1}, { unique: true });

valuationSchema.plugin(uniqueValidator);

module.exports = mongoose.model('valuations', valuationSchema);