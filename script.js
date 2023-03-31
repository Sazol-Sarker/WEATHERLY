const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '4a0958b637mshfdc3f5e03188207p1fb4c4jsn2df0c6b38dcb',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeatherReport = (city) => {

    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            cloud_pct.innerHTML = response.cloud_pct
            cloud_pcthd.innerHTML = response.cloud_pct
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            max_temp.innerHTML = response.max_temp
            min_temp.innerHTML = response.min_temp
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
            temp.innerHTML = response.temp
            temphd.innerHTML = response.temp
            wind_speed.innerHTML = response.wind_speed
            wind_speedhd.innerHTML = response.wind_speed

        })
        .catch(err => console.error(err));

        // other city1
        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Dhaka', options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            //other city section
            //1st city
            cloud_pctct1.innerHTML = response.cloud_pct
            tempct1.innerHTML = response.temp
            feels_likect1.innerHTML = response.feels_like
            humidityct1.innerHTML = response.humidity
            wind_speedct1.innerHTML = response.wind_speed
            sunrisect1.innerHTML = response.sunrise
            sunsetct1.innerHTML = response.sunset
        })
        .catch(err => console.error(err));

        // other city2
        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            //other city section
            //1st city
            cloud_pctct1.innerHTML = response.cloud_pct
            tempct1.innerHTML = response.temp
            feels_likect1.innerHTML = response.feels_like
            humidityct1.innerHTML = response.humidity
            wind_speedct1.innerHTML = response.wind_speed
            sunrisect1.innerHTML = response.sunrise
            sunsetct1.innerHTML = response.sunset
        })
        .catch(err => console.error(err));
        // other city3
        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Islamabad', options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            //other city section
            //1st city
            cloud_pctct1.innerHTML = response.cloud_pct
            tempct1.innerHTML = response.temp
            feels_likect1.innerHTML = response.feels_like
            humidityct1.innerHTML = response.humidity
            wind_speedct1.innerHTML = response.wind_speed
            sunrisect1.innerHTML = response.sunrise
            sunsetct1.innerHTML = response.sunset
        })
        .catch(err => console.error(err));
        // other city4
        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=New York', options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            //other city section
            //1st city
            cloud_pctct1.innerHTML = response.cloud_pct
            tempct1.innerHTML = response.temp
            feels_likect1.innerHTML = response.feels_like
            humidityct1.innerHTML = response.humidity
            wind_speedct1.innerHTML = response.wind_speed
            sunrisect1.innerHTML = response.sunrise
            sunsetct1.innerHTML = response.sunset
        })
        .catch(err => console.error(err));
        // other city5
        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Tokyo', options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            //other city section
            //1st city
            cloud_pctct1.innerHTML = response.cloud_pct
            tempct1.innerHTML = response.temp
            feels_likect1.innerHTML = response.feels_like
            humidityct1.innerHTML = response.humidity
            wind_speedct1.innerHTML = response.wind_speed
            sunrisect1.innerHTML = response.sunrise
            sunsetct1.innerHTML = response.sunset
        })
        .catch(err => console.error(err));
        // other city6
        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangkok', options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            //other city section
            //1st city
            cloud_pctct1.innerHTML = response.cloud_pct
            tempct1.innerHTML = response.temp
            feels_likect1.innerHTML = response.feels_like
            humidityct1.innerHTML = response.humidity
            wind_speedct1.innerHTML = response.wind_speed
            sunrisect1.innerHTML = response.sunrise
            sunsetct1.innerHTML = response.sunset
        })
        .catch(err => console.error(err));


}

// const getWeatherReport1 = () => {

//     // cityName.innerHTML = city
//     fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Dhaka', options)
//         .then(response => response.json())
//         .then(response => {
//             console.log(response)
//             //other city section
//             //1st city
//             cloud_pctct1.innerHTML = response.cloud_pct
//             tempct1.innerHTML = response.temp
//             feels_likect1.innerHTML = response.feels_like
//             humidityct1.innerHTML = response.humidity
//             wind_speedct1.innerHTML = response.wind_speed
//             sunrisect1.innerHTML = response.sunrise
//             sunsetct1.innerHTML = response.sunset
//         })
//         .catch(err => console.error(err));
// }


// const getWeatherReport2 = (city) => {

//     cityName.innerHTML = city
//     fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
//         .then(response => response.json())
//         .then(response => {
//             console.log(response)
//             //other city section
//             //1st city
//             cloud_pctct1.innerHTML = response.cloud_pct
//             tempct1.innerHTML = response.temp
//             feels_likect1.innerHTML = response.feels_like
//             humidityct1.innerHTML = response.humidity
//             wind_speedct1.innerHTML = response.wind_speed
//             sunrisect1.innerHTML = response.sunrise
//             sunsetct1.innerHTML = response.sunset
//         })
//         .catch(err => console.error(err));
// }

// const getWeatherReport3 = (city) => {

//     cityName.innerHTML = city
//     fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Islamabad', options)
//         .then(response => response.json())
//         .then(response => {
//             console.log(response)
//             //other city section
//             //1st city
//             cloud_pctct1.innerHTML = response.cloud_pct
//             tempct1.innerHTML = response.temp
//             feels_likect1.innerHTML = response.feels_like
//             humidityct1.innerHTML = response.humidity
//             wind_speedct1.innerHTML = response.wind_speed
//             sunrisect1.innerHTML = response.sunrise
//             sunsetct1.innerHTML = response.sunset
//         })
//         .catch(err => console.error(err));
// }
// const getWeatherReport4 = (city) => {

//     cityName.innerHTML = city
//     fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=New York', options)
//         .then(response => response.json())
//         .then(response => {
//             console.log(response)
//             //other city section
//             //1st city
//             cloud_pctct1.innerHTML = response.cloud_pct
//             tempct1.innerHTML = response.temp
//             feels_likect1.innerHTML = response.feels_like
//             humidityct1.innerHTML = response.humidity
//             wind_speedct1.innerHTML = response.wind_speed
//             sunrisect1.innerHTML = response.sunrise
//             sunsetct1.innerHTML = response.sunset
//         })
//         .catch(err => console.error(err));
// }
// const getWeatherReport5= (city) => {

//     cityName.innerHTML = city
//     fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Tokyo', options)
//         .then(response => response.json())
//         .then(response => {
//             console.log(response)
//             //other city section
//             //1st city
//             cloud_pctct1.innerHTML = response.cloud_pct
//             tempct1.innerHTML = response.temp
//             feels_likect1.innerHTML = response.feels_like
//             humidityct1.innerHTML = response.humidity
//             wind_speedct1.innerHTML = response.wind_speed
//             sunrisect1.innerHTML = response.sunrise
//             sunsetct1.innerHTML = response.sunset
//         })
//         .catch(err => console.error(err));
// }
// const getWeatherReport6 = (city) => {

//     cityName.innerHTML = city
//     fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangkok', options)
//         .then(response => response.json())
//         .then(response => {
//             console.log(response)
//             //other city section
//             //1st city
//             cloud_pctct1.innerHTML = response.cloud_pct
//             tempct1.innerHTML = response.temp
//             feels_likect1.innerHTML = response.feels_like
//             humidityct1.innerHTML = response.humidity
//             wind_speedct1.innerHTML = response.wind_speed
//             sunrisect1.innerHTML = response.sunrise
//             sunsetct1.innerHTML = response.sunset
//         })
//         .catch(err => console.error(err));
// }
submit.addEventListener("click", (e) => {
    e.preventDefault()
    getWeatherReport(city.value)
    getWeatherReport("Dhaka")
    getWeatherReport("Delhi")
    getWeatherReport("Islamabad")
    getWeatherReport("New York")
    getWeatherReport("Tokyo")
    getWeatherReport("Bangkok")

})

getWeatherReport("Dhaka")

