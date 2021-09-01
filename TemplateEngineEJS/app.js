const express = require('express');
const morgan = require('morgan');

const app = express();

app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.get('/about', (req, res) => {
    res.render('pages/about', {
        title: 'About Page'
    });
});

app.get('/help', (req, res) => {
    res.render('pages/help', {
        title: 'Help Page'
    });
});

app.get('/test', (req, res) => {
    res.render('pages/test', {
        title: 'Test Page'
    });
});

app.get('/', (req, res) => {
    let post = {
        title: 'Test Title',
        body: 'Test Body',
        published: true
    }

    let posts = [{
        title: 'Title One',
        author: 'Alvi Hasan'
    }, {
        title: 'Title Two',
        author: 'Alvi Hasan'
    }, {
        title: 'Title Three',
        author: 'Alvi Hasan'
    }, {
        title: 'Title Four',
        author: 'Alvi Hasan'
    }]

    res.render('pages/index', {
        title: 'EJs is a good Template Engine',
        post,
        posts
    });
});

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
})