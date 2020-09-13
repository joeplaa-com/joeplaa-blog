/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs");
const path = require("path");

// #1. Retrieve the files
// ===
// https://www.codexpedia.com/node-js/node-js-getting-files-from-a-directory-including-sub-directories/
// Return a list of files of the specified fileTypes in the provided dir, 
// with the file path relative to the given dir
// dir: path of the directory you want to search the files for
// fileTypes: array of file types you are search files, ex: ['.txt', '.jpg']
// ===
function getFilesFromDir (dir, fileTypes) {
    var filesToReturn = [];
    function walkDir (currentPath) {
        var files = fs.readdirSync(currentPath);
        for (var i in files) {
            var curFile = path.join(currentPath, files[i]);
            if (fs.statSync(curFile).isFile() && fileTypes.indexOf(path.extname(curFile)) != -1) {
                filesToReturn.push(curFile.replace(dir, ''));
            } else if (fs.statSync(curFile).isDirectory()) {
                walkDir(curFile);
            }
        }
    }
    walkDir(dir);
    return filesToReturn;
}

// #2. Create image object
// https://stackoverflow.com/questions/38374344/require-file-with-a-variable-in-react-js
function printRequireLines (filePaths) {
    let file;
    let key;
    let images = '';

    filePaths.forEach(path => {
        file = path.replace(/\\/g, "/");
        key = file.split('/').slice(1).join('/');
        relPath = '../' + file.split('/').slice(1).join('/');
        line = "    '" + key + "'" + ": " + "require('" + relPath + "')," + "\n";
        images = images + line;
    });

    return images;
}

// #3. Save the data as JS files
function writeToTSFile (filename, fileObject) {
    // eslint-disable-next-line no-undef
    fs.writeFileSync("./src/lib/" + filename + ".ts", "export const " + filename + " = { \n" + printRequireLines(fileObject) + "}", 'utf8', function (err) {
        if (err) {
            console.log("An error occured while writing JS Object to File.");
            return console.log(err);
        }

        console.log("TS file " + filename + ".ts" + " has been saved.");
    });
}

// Set constants
const mainAssetsDirectory = "./src/assets";
//const publicAssetsDirectory = "../../public/assets";
const fileTypes = [".jpg", ".jpeg", ".png", ".webp"]

// Get files and images
const files = getFilesFromDir(mainAssetsDirectory, fileTypes);

// Save data
writeToTSFile("images", files);

console.log(`✅ images.js generated!`);