//module-import
const express = require('express');
const morgan = require('morgan');
const userRouter = require('./userRoute');
const postRouter = require('./postRoute');

const app = express();
app.use(morgan('dev'));
//userRouter
app.use('/user', userRouter);
app.use('/posts', postRouter);

// app.get('/products/:prodID/reviews:reviewID', (req, res) => {
//     console.log('req.params');
//     res.send('I am In!' + req.params.prodID);
// });
//root router
app.get('/', (req, res) => {
    res.send('<h1>I am Listening!</h1>');
});

//server-create
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Server is Running on PORT ${PORT}`);
});