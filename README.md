# abatch: WordPress Batch Anchor Generator
Anchor Generator programmatically creates HTML anchor tags from a list of PDFs as src's and a list of file names in order. The list is then saved to a `.txt` file in an `anchor` directory immediately above the working directory.

*Note: The src's generated will automatically create a relative link with a standard WordPress uploads file path using the following structure: `/wp-content/uploads/${YEAR}/${MONTH}/$FILE`*

## How to Use
### Initialize Program
Install necessary packages and create the global `abatch` command. *See [package.json](./package.json)*
```
% npm run booty**
```

### Run `abatch`
```
% abatch
```

### Answer prompts
Make sure to enter file paths without escaping characters.
```
%  What is your src directory path? **../ENTER PATH TO DIRECTORY**
%  What is your anchor content file path? **../ENTER-PATH-TO-FILE**
```

Enter name of target file name without file extension. `abatch` program will automatically create a directory called "anchors" above your parent directory.
```
%  What file name do you want to save to? ANCHOR_PATH
```

## Uninstall
Unlink Node symlink for `abatch`.
```
% npm run sail
```