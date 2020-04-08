let weatherRequest2 = new XMLHttpRequest();
let palmyraURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5130441&units=imperial&APPID=9fc9de3e82518889680cc852f9a5b5d9';
weatherRequest2.open('GET' , palmyraURLstring, true);
weatherRequest2.send();




    weatherRequest2.onload = function() {
    let weatherData = JSON.parse(weatherRequest2.responseText);
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



    document.getElementById('current2').innerHTML= "Current Temp:  " + weatherData.main.temp + "&#8457;";
    document.getElementById('maxtemp2').innerHTML= "High:  " + weatherData.main.temp_max + "&#8457;";
    document.getElementById('mintemp2').innerHTML= "Min:  " + weatherData.main.temp_min + "&#8457;";
    document.getElementById('humidity2').innerHTML= "Humidity:  " + weatherData.main.humidity + "&#37;";
    document.getElementById('windspeed2').innerHTML= "Windspeed:  " + weatherData.wind.speed + "MPH";
    document.getElementById('windchill2').innerHTML= "Wind Chill:  " + fround + "&#8457;";


    }