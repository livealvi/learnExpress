const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url);
    res.end('<h1> Hello NodeJs, I am Alvi Hasan! </h1>')
})

server.listen(4141, () => {
    console.log('Server is Running PORT 4141');
});