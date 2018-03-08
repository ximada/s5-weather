//  Obteniendo datos de  Geolocation
 const apiGeolocation = () =>{
     fetch("https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyAyw9GBOW1m7Brs0yL8cfqfbCWM0rAx_hI")
         .then(response=> {
             return response.json();
         })
         .then(dataGeo =>{
             console.log('Request succesful',dataGeo)
             locationCountry(dataGeo);
         })
         .catch(error=>{
             console.log('Request failed', error)
         })
}
apiGeolocation();

const locationCountry = dataGeo =>{
    const lat = dataGeo;

}
// Llamando elementos del HTML
const weatherTodayContainer = document.getElementById('weather-today-container');
const weatherForecastContainer = document.getElementById('weather-forecast-container');

//  Obtenido data de API darksky
 const apiLoad = () => {
         fetch("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/a2bd104aaaf24feedc7378c5d0cc0588/23.6345005,-102.5527878")
         .then(function (response){
             return response.json();
         })
         .then(function (data){
             console.log('Request succesful', data);
              reponsePronostic(data);
             

         })
         .catch(function (error){
             console.log('Request failed', error)
         });
 }
 apiLoad();

 const reponsePronostic = data =>{
    //  getting  data that will be used to display on screen
     const currentlyWeather = data.currently;
     const iconWeather = currentlyWeather.icon;
     const windSpeed = currentlyWeather.windSpeed;
     const humidityWeather = currentlyWeather.humidity;
     const uvIndex = currentlyWeather.uvIndex;
     const atmosphericPressure = currentlyWeather.pressure;

     //console.log(atmosphericPressure);
    //  
     const dailyWeather = data.daily.data;
      //console.log(dailyWeather)

     paintCurretlyWeather(iconWeather, windSpeed, humidityWeather, uvIndex, atmosphericPressure, dailyWeather);
     printForecastWeather(dailyWeather);
 }
 

// printing data on the screen
const paintCurretlyWeather = (iconWeather, windSpeed, humidityWeather, uvIndex, atmosphericPressure,dailyWeather) =>{
    const weatherTodayContainer = document.getElementById('weather-today-container');
    

             let template =`<div>
                             <img src="./assets/images/icon.jpg" alt ="image" style="width:20%;">
                             <p>Wind: ${windSpeed} m/s</p>
                             <p>Humidity: ${humidityWeather} %</p>
                             <p>UV Index: ${uvIndex}</p>
                             <p>Pressure: ${atmosphericPressure} hPa</p>
                            </div>`
    weatherTodayContainer.innerHTML = template;
     

}

const printForecastWeather = (dailyWeather)=>{
    const weatherForecastContainer = document.getElementById('weather-forecast-container');
      
    dailyWeather.forEach(days=>{
        let templateForecast = `<div> 
                                  <p>${unixDateToCurrentDate(days.time)}</p>
                                  <img src="./assets/images/icon-week.png" alt ="image" style="width:20%;">
                                  <p>${days.summary}</p>
                                  <p>Temperature-high: ${days.temperatureHigh} and Temperature-min: ${days.temperatureMin}</p>
                                </div>`
        weatherForecastContainer.insertAdjacentHTML('beforeEnd', templateForecast);
    })
}
const unixDateToCurrentDate = (unixNumber) => new Date(unixNumber * 1000).toLocaleString('en-US', { weekday: 'long' });