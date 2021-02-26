const router = require('express').Router();

//user router-start
router.get('/login', (req, res) => {
    res.send('I am login route');
});

router.get('/logout', (req, res) => {
    res.send('I am logout route');
});

router.get('/singup', (req, res) => {
    res.send('I am Singup route');
});
//user router-end
//exports-module
module.exports = router;