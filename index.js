const fs = require('fs');
const path = require('path');
const prompt = require('prompt-sync')({sigint: true});
const os = require('os');

let srcDirPath = prompt('What is your src directory path? ');

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

    return srcFullArr;
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

    return anchorContent;
}

let fileName = prompt('What file name do you want to save to? ');

const saveFile = (anchorArray, fileName) => {
    // Create an 'anchors' directory if it doesn't exist
    const targetDirectory = path.join(__dirname, '../', 'anchors');
    if(!fs.existsSync(targetDirectory)) {
        fs.mkdirSync(targetDirectory);
    }

    // Create a file with the contents of the anchorArray
    anchorArray.forEach(anchor => {
        fs.open(path.join(__dirname, '../anchors', `${fileName}.txt`), 'a', 666, (event, id) => {
            fs.write(id, anchor + os.EOL, null, 'utf-8', () => {
                fs.close(id, () => {
                    return;
                })
            })
        })
    })
    
}

try {
    let anchorSrc = createSrc(srcDirPath);
    let anchorContent = createContent(anchorContentFilePath);
    let fullAnchor = [];
    for (i=0; i < anchorSrc.length; i++) {
        fullAnchor.push(`<a href="${anchorSrc[i]}">${anchorContent[i]}</a>`);
    }
    saveFile(fullAnchor, fileName);
    console.log(fullAnchor);
  } catch (err) {
    console.error(err);
}