const express = require('express');
const path = require('path');

//importing utils
const protectRoute = require('./utils/verifytoken')

// importing routes
const authRoutes = require('./routes/authRoutes');
const crudRoutes = require('./routes/crudRoutes');
const viewRouter = require('./routes/viewRoutes');

const app = express();

// Make it so we can use pug template as our view engine

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));


app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

// Mouting the routes to the app

app.use('/', viewRouter);

app.use('/api/user', authRoutes);
app.use('/api/crud', crudRoutes);

module.exports = app;