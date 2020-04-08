let weatherRequest4 = new XMLHttpRequest();
let kansascityURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=4393217&units=imperial&APPID=9fc9de3e82518889680cc852f9a5b5d9';
weatherRequest4.open('GET' , kansascityURLstring, true);
weatherRequest4.send();




    weatherRequest4.onload = function() {
    let weatherData = JSON.parse(weatherRequest4.responseText);
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



    document.getElementById('current4').innerHTML= "Current Temp:  " + weatherData.main.temp + "&#8457;";
    document.getElementById('maxtemp4').innerHTML= "High:  " + weatherData.main.temp_max + "&#8457;";
    document.getElementById('mintemp4').innerHTML= "Min:  " + weatherData.main.temp_min + "&#8457;";
    document.getElementById('humidity4').innerHTML= "Humidity:  " + weatherData.main.humidity + "&#37;";
    document.getElementById('windspeed4').innerHTML= "Windspeed:  " + weatherData.wind.speed + "MPH";
    document.getElementById('windchill4').innerHTML= "Wind Chill:  " + fround + "&#8457;";


    }




  