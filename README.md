# Anchor Generator
Anchor Generator programmatically creates HTML anchor tags from a list of PDFs as src's and a list of file names in order.

*Note: The src generated will automatically create a relative link with a standard WordPress uploads file path using the following structure: `/wp-content/uploads/${YEAR}/${MONTH}/$FILE`*

## How to Use
Install dependencies
```
npm install
```

Run script
```
node index.js
```

Enter file paths without escaping characters.
```
%  What is your src directory path? ../PATH TO DIRECTORY
%  What is your anchor content file path? ../PATH-TO-FILE
```

Enter name of target file name without file extension. The program will automatically create a directory called "anchors" above your parent directory.
```
%  What file name do you want to save to? ANCHOR_PATH
```