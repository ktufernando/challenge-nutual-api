const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;
 
const valuationSchema = new Schema({
        address: {
            type: String,
            unique: true
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
        yearOfConstruction: Number,
        yearOfRenovation: Number,
        totalPrice: Number,
        totalArea: Number,
        priceM2: {
            type: Number,
            required: [true, 'Price M2 required'],
        },
        hasElevator: {
            type: Boolean,
            default: false
        },
        valuation_date: Date
    },
    {timestamps: true}
);

valuationSchema.index({ latitude: 1, longitude: 1}, { unique: true });

valuationSchema.plugin(uniqueValidator, {message: 'Already exist in the DB'});

module.exports = mongoose.model('valuations', valuationSchema);