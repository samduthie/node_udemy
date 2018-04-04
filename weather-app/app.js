const yargs = require('yargs');

const geocode = require('./geocode/geocode')
const weather = require('./weather/weather')

var latitude
var longitude

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if (errorMessage) {

    } else {
        console.log(JSON.stringify(results, undefined, 2));
        longitude = results.longitude;
        latitude = results.latitude;

        // console.log(longitude)
        // console.log(latitude)
        weather.getWeather(longitude, latitude, (errorMessage, weatherResults) =>  {
            if (errorMessage) {
                console.log(errorMessage)
            } else {
                console.log(`It's currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}`)
            }
        });

    }
});

