const fs = require('fs');
const path = require('path');
const prompt = require('prompt-sync')({sigint: true});

// let srcDirPath = prompt('What is your src directory path? ');

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

let anchorContentFilePath = prompt('What is your anchor content file path? ');

const createContent = (anchorContentFilePath, encoding='utf-8') => {
    const fileContents = fs.readFileSync(anchorContentFilePath, encoding);
    let anchorContent = fileContents.split('\n');

    // Remove any indicies that are empty strings
    for(i=0; i < anchorContent.length; i++) {
        if (anchorContent[i].length === 0) {
            anchorContent.splice(i, 1);
        }
    }
    
    console.log(anchorContent);
}

try {
    // createSrc(srcDirPath);
    createContent(anchorContentFilePath);
  } catch (err) {
    console.error(err);
}