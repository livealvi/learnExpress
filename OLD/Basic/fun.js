const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.readFile('./index.html', (err, data) => {
        res.write(data);
        res.end();
        console.log(err);
    });
})


server.listen(4141, () => {
    console.log('Server is Running PORT 4141');
});