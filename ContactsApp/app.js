const express = require('express');
const morgan = require('morgan');

const contactRouts = require('./contactRoutes');

const app = express();
app.use(morgan('dev'));

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json());

app.use('/contacts', contactRouts);

app.get('*', (req, res) => {
    res.send('<h1>Please, Use The Correct Routes</h1>');
});

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Server Is Running On Port 8080`);
})