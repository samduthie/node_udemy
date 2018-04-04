const request = require('request')

var getWeather = (lat, long, callback) => {

        request({
        url: 'https://api.darksky.net/forecast/e770f661a34a6fa5eab7572fa66b2916/' + long + ',' + lat,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
           callback(undefined, {
            temperature: convertFahrenheitToCelsius(body.currently.temperature),
            apparentTemperature: convertFahrenheitToCelsius(body.currently.apparentTemperature)
           });
        } else {
            callback("unable to fetch weather");
        };

    })

}

var convertFahrenheitToCelsius = (temperature) => {
    var converted_temperature = (temperature - 32) / 1.8
    converted_temperature = converted_temperature.toFixed(1)
    return converted_temperature
}

module.exports.getWeather = getWeather
