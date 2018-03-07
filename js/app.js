//  Obteniendo datos de  Geolocation
 const apiGeolocation = () =>{
     fetch("https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyCzE3lK9K-zPt7BGZKsKs6CZKuV1Ec0XEs")
         .then(function(response){
             return response.json();
         })
         .then(function(data){
             console.log('Request succesful',data)

         })
         .catch(function(error){
             console.log('Request failed', error)
         })
}
apiGeolocation();

 
 const apiLoad = () =>{
     fetch("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/a2bd104aaaf24feedc7378c5d0cc0588/23.6345005,-102.5527878")
         .then(function (response) {
             return response.json();
         })
         .then(function (data) {
             console.log('Request succesful', data);
              reponsePronostic(data);
             

         })
         .catch(function (error) {
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
      console.log(dailyWeather)

     paintCurretlyWeather(iconWeather, windSpeed, humidityWeather, uvIndex, atmosphericPressure)
 }
 

// printing data on the screen
const paintCurretlyWeather = (iconWeather, windSpeed, humidityWeather, uvIndex, atmosphericPressure) =>{

}