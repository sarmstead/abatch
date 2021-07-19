const prompt = require('prompt-sync')({sigint: true});
const chalk = require('chalk');
const { program } = require('commander');

// Import modules
const createSrc = require('./utils/createSrc');
const createContent = require('./utils/createContent');
const saveFile = require('./utils/saveFile');

program.version('0.1.1').description('Simple anchor link generator for WordPress');

program
    .command('src <srcPath>')
    .description('Set local directory path for PDFs')
    .action(function(path) {
        console.log(path);
    });
    

program
    .command('cnt <contentPath>')
    .description('Set anchor content file path')
    .action(function(path) {
        console.log(path);
    });    
    
program.parse();

// User prompts
// let options = program.opts();
// let srcDirPath = options.src;
// let anchorContentFilePath = options.cnt;
// let fileName = prompt('What file name do you want to save to? ');

// try {
//     let anchorSrc = createSrc(program.opts({src}));
//     let anchorContent = createContent(anchorContentFilePath);
//     let fullAnchor = [];
//     if(anchorSrc.length !== anchorContent.length) {
//         console.error(chalk.red('The files provided do not have the same number of entries'));
//     }
//     for (i=0; i < anchorSrc.length; i++) {
//         fullAnchor.push(`<a href="${anchorSrc[i]}" target="_blank">${anchorContent[i]}</a>`);
//     }
//     saveFile(fullAnchor, fileName);
//   } catch (err) {
//     console.error(err);
// }

// console.log(program.opts());