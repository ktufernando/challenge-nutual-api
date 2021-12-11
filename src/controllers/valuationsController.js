const express = require("express");
const valuationsService = require("../services/valuationsService");
const Success = require("../handlers/successHandler");
const logger = require("../loaders/logger");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
const valuationAverageForCity = async (req, res, next) => {
  try {
    const valuation = await valuationsService.valuationAverageForCity(
      req.params.city
    );
    res.json(new Success(valuation));
  } catch (err) {
    next(err);
  }
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 */
const saveValuation = async (req, res, next) => {
  try {
    const valuation = await valuationsService.save(req.body);
    res.json(new Success(valuation));
  } catch (err) {
    next(err);
  }
};

module.exports = {
  valuationAverageForCity,
  saveValuation,
};
