const fs = require('fs');
const path = require('path');

let srcDirPath = '../1\ Foundational\ Years/';

let srcArr = fs.readdirSync(srcDirPath);

let targetYear = new Date().getFullYear().toString();
let targetMonth = new Date().getMonth().toString();
if (targetMonth < 10) {
    targetMonth = '0'.concat(targetMonth);
}
let relativePathString = `/wp-content/uploads/${targetYear}/${targetMonth}/`;


console.log(relativePathString);