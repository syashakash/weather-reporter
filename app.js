var __weather = require('./weather.js');

var __loc = require('./location.js');

var argv = require('yargs')
    .option('location', {
        alias: 'l',
        type: 'string',
        describe: 'Your Location',
        demand: false
    })
    .help('help')
    .argv;

if (typeof argv.l === 'string' && argv.location.length > 0) {
    console.log("Location Provided");
    __weather(argv.l).then(function(weatherReport) {
        console.log(weatherReport);
    }).catch(function(errorMessage) {
        console.log(errorMessage);
    });
} else {
    console.log("No location provided!");
    __loc().then(function(locationData) {
        return __weather(locationData.city).then(function(weatherReport) {
            console.log(weatherReport);
        }).catch(function(errorMessage) {
          console.log(errorMessage);
        });
    });
}
