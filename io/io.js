const fs = require('fs');

module.exports.decodeHexFileContent = (filePath) =>  {
    return new Promise((resolve, reject) => {
        if(reject){console.log(reject);}

        //récuperer l'element
        var element = fs.readFileSync(filePath, 'utf8');
        //conversion hex ==> htf8
        element = Buffer.from(element, 'hex').toString('utf8');
        if(element)
            resolve(element)
    });
}