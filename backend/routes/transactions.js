const {
    addIncome,
    getIncomes,
    deleteIncome
} = require('../controllers/income');

const router = require('express').Router();
const protect = require('../middleware/authMiddleware');


router.post('/add-income'. protect, addIncome);
router.get('/get-incomes', protect, getIncomes);
router.delete('/delete-income/:id', protect, deleteIncome)



module.exports = router;