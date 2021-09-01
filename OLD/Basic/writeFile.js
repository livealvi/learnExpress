const fs = require('fs');

const testObj = {
    name: 'Alvi Hasan',
    email: 'hello@alvihasan.com',
    address: {
        city: 'Jessore',
        country: 'BD'
    }
}

const data = JSON.stringify(testObj);
fs.writeFile('./test.json', data, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('file write done!');
    }
});