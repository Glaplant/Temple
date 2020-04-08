let weatherRequest1 = new XMLHttpRequest();
let winterquartersURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5074472&units=imperial&&appid=9fc9de3e82518889680cc852f9a5b5d9';
weatherRequest1.open('GET' , winterquartersURLstring, true);
weatherRequest1.send();




    weatherRequest1.onload = function() {
    let weatherData = JSON.parse(weatherRequest1.responseText);
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



    document.getElementById('current1').innerHTML= "Current Temp:  " + weatherData.main.temp + "&#8457;";
    document.getElementById('maxtemp1').innerHTML= "High:  " + weatherData.main.temp_max + "&#8457;";
    document.getElementById('mintemp1').innerHTML= "Min:  " + weatherData.main.temp_min + "&#8457;";
    document.getElementById('humidity1').innerHTML= "Humidity:  " + weatherData.main.humidity + "&#37;";
    document.getElementById('windspeed1').innerHTML= "Windspeed:  " + weatherData.wind.speed + "MPH";
    document.getElementById('windchill1').innerHTML= "Wind Chill:  " + fround + "&#8457;";


    }