const {
    addIncome,
    getIncomes,
    deleteIncome
} = require('../controllers/income');

const {
    addExpense,
    getExpense,
    deleteExpense
} = require('../controllers/expense');

const router = require('express').Router();
const protect = require('../middleware/authMiddleware');


router.post('/add-income', protect, addIncome);
router.get('/get-incomes', protect, getIncomes);
router.delete('/delete-income/:id', protect, deleteIncome)

router.post('/add-expense', protect, addExpense);
router.get('/get-expense', protect, getExpense);
router.delete('/delete-expense/:id', protect, deleteExpense);

module.exports = router;