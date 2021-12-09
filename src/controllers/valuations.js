const express = require('express');
const valuationService = require('../services/valuationService');
const Success = require('../handlers/successHandler');
const logger = require('../loaders/logger');

/**
 * 
 * @param {express.Request} req 
 * @param {express.Response} res 
 */
const valuationAverageForCity = async (req, res, next) => {
    try {

        const valuation = await valuationService.valuationAverageForCity();
        res.json(new Success(valuation));
        
    } catch (err) {
        next(err);
    }
};

module.exports = {
    valuationAverageForCity,
}