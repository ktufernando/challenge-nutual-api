const { Router } = require('express');
const {
    valuationAverageForCity
} = require('../controllers/valuations');

const router = Router();

router.get('/:city', valuationAverageForCity);

module.exports = router;