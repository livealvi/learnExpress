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

// let Schema = mongoose.Schema;
// let testSchema = new Schema({
//     name: String
// });

//let Test = mongoose.model('Test', testSchema);

app.use('/contacts', router);

app.get('/', (req, res) => {

    // let test = new Test({
    //     name: 'Alvi Hasan'
    // })

    // test.save()
    //     .then(t => {
    //         res.json(t);
    //     })
    //     .catch(err => {
    //         console.log(e);
    //         res.status(500).json({
    //             error: 'Error Occurred'
    //         })
    //     })

});


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