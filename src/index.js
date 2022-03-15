const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const app = express();


app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '/public/api-front')));


app.set('port', process.env.PORT || 3000);


app.use('/api/', require('./routes/api.routes'));

module.exports = app;