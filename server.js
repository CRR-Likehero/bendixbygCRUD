const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = require('./app');


//Connecting the database mongoDB
dotenv.config({ path: './config.env'});
const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then( () => {
    console.log('Database connected succesfully')
});

//Creating the server that runs our application
const port = process.env.PORT || port;
const server = app.listen(port, () => {
    console.log(`App succesfully running on port ${port}`)
});

