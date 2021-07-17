const fs = require('fs');
const path = require('path');

let srcDirPath = '../1\ Foundational\ Years/';

const createSrc = (srcDirPath) => {
    let srcFileArr = fs.readdirSync(srcDirPath);
    let targetYear = new Date().getFullYear().toString();
    let targetMonth = new Date().getMonth().toString();
    if (targetMonth < 10) {
        targetMonth = '0'.concat(targetMonth);
    }
    let wordpressUploadsDirString = `/wp-content/uploads/${targetYear}/${targetMonth}/`;

    let srcFullArr = [];
    srcFileArr.forEach(src => {
        // Replace spaces with proper UTF-8 character
        newSrc = src.split(' ').join('%20');

        srcFullArr.push(`${wordpressUploadsDirString}${newSrc}`);
    });

    console.log(srcFullArr);
}

// try {
//     createSrc(srcDirPath);
// } catch (err) {
//     console.error(err);
// }

let anchorContentFilePath = '../anchor-content/foundational.txt';

const createContent = (anchorContentFilePath, encoding='utf-8') => {
    const fileContents = fs.readFileSync(anchorContentFilePath, encoding);
    let anchorContent = fileContents.split('\n');
    console.log(anchorContent);
}


try {
    createContent(anchorContentFilePath);
  } catch (err) {
    console.error(err);
}


console.log(srcFullArr);