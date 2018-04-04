const request = require('request');
const yargs = require('yargs');

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

encodedAddress = encodeURIComponent(argv.address);

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + encodedAddress +'&key=AIzaSyArBj4Ai9N1Djqye7Qg8B5vC902eDUCieY',
    json: true,
}, (error, response, body) => {
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Langitude: ${body.results[0].geometry.location.lng}`);
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
    
    
});