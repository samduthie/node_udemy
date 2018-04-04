const request = require('request');

var geocodeAddress = (address) => {
    
    encodedAddress = encodeURIComponent(address);

    request({
        url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + encodedAddress +'&key=AIzaSyArBj4Ai9N1Djqye7Qg8B5vC902eDUCieY',
        json: true,
    }, (error, response, body) => {
        if (error){
            console.log("unable to connect to google servers");
            console.log(error);
        } else if (body.status === 'ZERO_RESULTS'){
            console.log("unable to find address");
        } else if (body.status = 'OK'){
            console.log(`Address: ${body.results[0].formatted_address}`);
            console.log(`Langitude: ${body.results[0].geometry.location.lng}`);
            console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
        }

    });
}

module.exports.geocodeAddress = geocodeAddress;