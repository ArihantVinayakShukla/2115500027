const express = require('express');
const numberRoutes = require('../routes/numberRoutes.js');
const errorHandler = require('../middleware/errorhandler.js');

const app = express();

app.use('/numbers', numberRoutes);

app.use((req, res) => {
    res.status(404).json({ error: 'Not found' });
});

app.use(errorHandler);

module.exports = app;