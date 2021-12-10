const { Router } = require('express');
const {
    valuationAverageForCity,
    saveValuation
} = require('../controllers/valuationsController');
const { 
    valuationAverageForCityValidations,
} = require('../middlewares/valuations');

const router = Router();

router.get('/:city', valuationAverageForCityValidations, valuationAverageForCity);
router.post('/', saveValuation);

module.exports = router;