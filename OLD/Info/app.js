const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const routes = require('./routes');


const app = express();
app.use(morgan('dev'));
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.use('/users', routes);

app.use('*', (req, res) => {
    res.send("<h1>Please Hit The URL!</h1>")
});

const PORT = process.env.PORT || 8080
mongoose.connect(`mongodb+srv://test-app:WXI14Pe0z5LnHoNi@cluster0.h8bai.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    app.listen(PORT, () => {
        console.log(`SERVER IS RUNNING ${PORT}`);
    });
}).catch(err => {
    console.log(err);
});