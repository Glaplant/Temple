let weatherRequest3 = new XMLHttpRequest();
let nauvooURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=4903330&units=imperial&appid=9fc9de3e82518889680cc852f9a5b5d9';
weatherRequest3.open('GET' , nauvooURLstring, true);
weatherRequest3.send();




    weatherRequest3.onload = function() {
    let weatherData = JSON.parse(weatherRequest3.responseText);
    console.log(weatherData);

    var maxtemp = weatherData.main.temp_max;
    var mintemp = weatherData.main.temp_min;
    var avgtemp = (maxtemp + mintemp)/2;
    var airspeed = weatherData.wind.speed;
    
    var t= avgtemp;
    var s= airspeed;
    
    
    
    
    /*t=(air average temperature)*/
    /*s= windspeed in mph*/
    var f=35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow( s,0.16));
    var fround= Math.round(f * 100)/100;



    document.getElementById('current3').innerHTML= "Current Temp:  " + weatherData.main.temp + "&#8457;";
    document.getElementById('maxtemp3').innerHTML= "High:  " + weatherData.main.temp_max + "&#8457;";
    document.getElementById('mintemp3').innerHTML= "Min:  " + weatherData.main.temp_min + "&#8457;";
    document.getElementById('humidity3').innerHTML= "Humidity:  " + weatherData.main.humidity + "&#37;";
    document.getElementById('windspeed3').innerHTML= "Windspeed:  " + weatherData.wind.speed + "MPH";
    document.getElementById('windchill3').innerHTML= "Wind Chill:  " + fround + "&#8457;";


    }