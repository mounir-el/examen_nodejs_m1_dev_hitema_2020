const crypto = require('crypto');

function sha1Encode(data) {
    return crypto.createHash('sha1').update(data).digest('hex')
}

module.exports.digestAuth = (request, response, next) => {
    //authorisation basic
    const authorization = request.headers.authorization;  
    const encoded = authorization.replace('Basic ', '');
    const decoded = Buffer.from(encoded, 'base64').toString('utf8');
    // 'login => paswword'
    const authentication = decoded.split(':');
    var password = "password";
    //   if login = node & password = password
    const isValid = authentication[0] === 'node'
        && authentication[1] === sha1Encode(password);
    
    // si pas authentifié
    isValid ? next() : response.sendStatus(401);
}