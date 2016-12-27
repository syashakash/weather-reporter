var __request = require('request');
var url = 'http://ipinfo.io';

module.exports = function() {
    return new Promise(function(resolve, reject) {
        __request({
            url: url,
            json: true
        }, function(error, response, body) {
            if (error) {
                reject();
            } else {
                //callback(JSON.stringify(body, null, 2));
                resolve(body);
            }
        });
    });
}
