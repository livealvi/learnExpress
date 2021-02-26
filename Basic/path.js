const path = require('path')
const myCurrentPath = __filename;

console.log(path.basename(__dirname));
console.log(path.extname(myCurrentPath));

let pathObj = {
    dir: 'user/local',
    name: 'testFile',
    ext: '.js'
}

console.log(path.format(pathObj));
console.log(path.isAbsolute(myCurrentPath));
console.log(path.isAbsolute('./math.js'));

console.log(path.join('user', 'local', 'alvihasan', 'testfile.js'));
console.log(path.resolve(__dirname, 'scripts', 'test.js'));

console.log(path.parse(myCurrentPath));