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
    //1st

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
        .then(response => response.json())
        .then(response => {
            console.log(response)

            cloud_pctct1.innerHTML = response.cloud_pct
            tempct1.innerHTML = response.temp
            feels_likect1.innerHTML = response.feels_like
            humidityct1.innerHTML = response.humidity
            wind_speedct1.innerHTML = response.wind_speed
            sunrisect1.innerHTML = response.sunrise
            sunsetct1.innerHTML = response.sunset

        })
        .catch(err => console.error(err));

    // 2nd  
    // fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Dhaka', options)
    //     .then(response => response.json())
    //     .then(response => {
    //         console.log(response)

    //         cloud_pctct2.innerHTML = response.cloud_pct
    //         tempct2.innerHTML = response.temp
    //         feels_likect2.innerHTML = response.feels_like
    //         humidityct2.innerHTML = response.humidity
    //         wind_speedct2.innerHTML = response.wind_speed
    //         sunrisect2.innerHTML = response.sunrise
    //         sunsetct2.innerHTML = response.sunset

    //     })
    //     .catch(err => console.error(err));

    //3rd 

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Islamabad', options)
        .then(response => response.json())
        .then(response => {
            console.log(response)

            cloud_pctct3.innerHTML = response.cloud_pct
            tempct3.innerHTML = response.temp
            feels_likect3.innerHTML = response.feels_like
            humidityct3.innerHTML = response.humidity
            wind_speedct3.innerHTML = response.wind_speed
            sunrisect3.innerHTML = response.sunrise
            sunsetct3.innerHTML = response.sunset

        })
        .catch(err => console.error(err));

    //4th 

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=England', options)
        .then(response => response.json())
        .then(response => {
            console.log(response)

            cloud_pctct4.innerHTML = response.cloud_pct
            tempct4.innerHTML = response.temp
            feels_likect4.innerHTML = response.feels_like
            humidityct4.innerHTML = response.humidity
            wind_speedct4.innerHTML = response.wind_speed
            sunrisect4.innerHTML = response.sunrise
            sunsetct4.innerHTML = response.sunset

        })
        .catch(err => console.error(err));

    //5th 

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Tokyo', options)
        .then(response => response.json())
        .then(response => {
            console.log(response)

            cloud_pctct5.innerHTML = response.cloud_pct
            tempct5.innerHTML = response.temp
            feels_likect5.innerHTML = response.feels_like
            humidityct5.innerHTML = response.humidity
            wind_speedct5.innerHTML = response.wind_speed
            sunrisect5.innerHTML = response.sunrise
            sunsetct5.innerHTML = response.sunset

        })
        .catch(err => console.error(err));


    // //6th

    // fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangkok', options)
    //     .then(response => response.json())
    //     .then(response => {
    //         console.log(response)

    //         cloud_pctct6.innerHTML = response.cloud_pct
    //         tempct6.innerHTML = response.temp
    //         feels_likect6.innerHTML = response.feels_like
    //         humidityct6.innerHTML = response.humidity
    //         wind_speedct6.innerHTML = response.wind_speed
    //         sunrisect6.innerHTML = response.sunrise
    //         sunsetct6.innerHTML = response.sunset

    //     })
    //     .catch(err => console.error(err));


}


submit.addEventListener("click", (e) => {
    e.preventDefault()
    getWeatherReport(city.value)
})

getWeatherReport("Dhaka")

