const fs = require('fs');
const path = require('path');

let srcDirPath = '../1\ Foundational\ Years/';

let srcArr = fs.readdirSync(srcDirPath);

console.log(srcArr);