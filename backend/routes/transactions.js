const {
    addIncome
} = require('../controllers/income');

const router = require('express').Router();
const protect = require('../middleware/authMiddleware');


router.post('/add-income'. protect, addIncome);


module.exports = router;