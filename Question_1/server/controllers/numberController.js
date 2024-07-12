const apiService = require('../services/apiService.js');
const config = require('../config');
const AverageCalculator = require('../services/AverageCalculator.js');

const calculator = new AverageCalculator(config.WINDOW_SIZE);

exports.getNumbers = async (req, res, next) => {
    
    const {type} = req.params;
    const validTypes = ['prime', 'fibo', 'even', 'rand'];

    if(!validTypes.includes(type)) {
        return res.status(400).json({err: 'Invalid Number type'})
    }

    try {
       const numbers = await apiService.fetchNumbers(type);

        numbers.forEach(num => calculator.addNumber(num));

        const {windowPrevState, windowCurrState} = calculator.getWindowState();

        res.json({
            windowPrevState,
            windowCurrState,
            numbers,
            avg: calculator.getAverage().toFixed(2)
        })
    } catch(error) {
        next(error);
    }
}