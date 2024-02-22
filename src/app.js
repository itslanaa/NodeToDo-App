require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();

// Set up view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Set up middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Set up routes
const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

const helmet = require('helmet');
app.use(helmet());

