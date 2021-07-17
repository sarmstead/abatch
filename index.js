const fs = require('fs');
const path = require('path');

let srcDirPath = '../1\ Foundational\ Years/';

let srcFileNameArr = fs.readdirSync(srcDirPath);

let targetYear = new Date().getFullYear().toString();
let targetMonth = new Date().getMonth().toString();
if (targetMonth < 10) {
    targetMonth = '0'.concat(targetMonth);
}
let wordpressUploadsDirString = `/wp-content/uploads/${targetYear}/${targetMonth}/`;

let srcFullArr = [];
srcFileNameArr.forEach(src => {
    // Replace spaces with proper UTF-8 character
    newSrc = src.split(' ').join('%20');
    
    srcFullArr.push(`${wordpressUploadsDirString}${newSrc}`);
});
console.log(srcFullArr);