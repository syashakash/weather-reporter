var __request = require('request');
var url = 'http://api.openweathermap.org/data/2.5/weather?q=Jamshedpur,in&appid=e789cdad2657cc2e09b1f34e76f36fa7&unit=metric';
var preurl = url.slice(0, url.indexOf('=') + 1);
var posturl = url.slice(url.indexOf(','), url.length);
//console.log(preurl + encodeURIComponent('San Fran') + posturl);

module.exports = function(locationCity) {
    return new Promise(function(resolve, reject) {
        if (!locationCity) {
            reject('ERROR!!');
        } else {
            __request({
                url: preurl + encodeURIComponent(locationCity) + posturl,
                json: true
            }, function(error, response, body) {
                try {
                    resolve('It\'s ' + body.main.temp + ' here in ' + body.name);
                } catch (e) {
                    reject('Unable to fetch weather');
                }
            });
        }
    });
}
