const { check } = require('express-validator');
const AppError = require('../errors/appError');
const logger = require('../loaders/logger');
const {validationResult} = require('./commons');
const valuationsService = require('../services/valuationsService');

const _cityRequired = check('city', 'City required').not().isEmpty();

const _cityExist = check('city').custom(
    async (city = '') => {
        const cityFound = await valuationsService.thereAreValuationsForCity(city);
        if(!cityFound) {
            throw new AppError('The city do not have valuations', 400);
        }
    }
);

const valuationAverageForCityValidations = [
    _cityRequired,
    _cityExist,
    validationResult
]

module.exports = {
    valuationAverageForCityValidations
}