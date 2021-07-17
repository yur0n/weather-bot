const request = require('request')

const forecast = (lat, long, location, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=c3ae4495787f17e3f483a3e8befc580e&query=' + lat + ',' + long
    request({ url: url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect', undefined)
        } else if (response.body.error) {
            callback('Unable to find location')
        } else {
            callback(undefined, response.body.current.weather_descriptions + '. The temperature is ' + response.body.current.temperature + ' degrees. ' + 'Feels like ' + response.body.current.feelslike + ' degrees in ' + location)
        }
    })
}

module.exports = forecast