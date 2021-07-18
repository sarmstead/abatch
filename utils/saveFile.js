const fs = require('fs');
const path = require('path');
const os = require('os');

const saveFile = (anchorArray, fileName) => {
    // Create an 'anchors' directory if it doesn't exist
    const targetDirectory = path.join(__dirname, '../../', 'anchors');
    if(!fs.existsSync(targetDirectory)) {
        fs.mkdirSync(targetDirectory);
    }

    // Create a file with the contents of the anchorArray
    anchorArray.forEach(anchor => {
        fs.open(path.join(targetDirectory, `${fileName}.txt`), 'a', 666, (event, id) => {
            fs.write(id, anchor + os.EOL, null, 'utf-8', () => {
                fs.close(id, () => {
                    return;
                })
            })
        })
    })
    
}

module.exports = saveFile;