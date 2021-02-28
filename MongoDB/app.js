const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const router = require('./routes');

const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.use('/contacts', router);

const PORT = process.env.PORT || 8080
mongoose
    .connect(`mongodb+srv://test-app:WXI14Pe0z5LnHoNi@cluster0.h8bai.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
        });
    })
    .catch(err => {
        console.log(err);
    })