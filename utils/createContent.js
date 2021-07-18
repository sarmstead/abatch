const fs = require('fs');

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

module.exports = createContent;