let templeRequest = new XMLHttpRequest();
let templeURLstring = "https://glaplant.github.io/CIT230/assignments/temple/json/templedata.json";
templeRequest.open('GET' , templeURLstring, true);
templeRequest.send();




    templeRequest.onload = function () {
    let templeData = JSON.parse(templeRequest.responseText);
    

                       /*--Temple Name Headers----*/
    document.getElementById("name1").innerHTML= templeData.temples[1].name;
    document.getElementById("name2").innerHTML= templeData.temples[0].name;
    document.getElementById("name3").innerHTML= templeData.temples[2].name;
    document.getElementById("name4").innerHTML= templeData.temples[3].name;


                         /*--Temple Phone----*/

    document.getElementById("telephone1").innerHTML= templeData.temples[1].telephone;
    document.getElementById("telephone2").innerHTML= templeData.temples[0].telephone;
    document.getElementById("telephone3").innerHTML= templeData.temples[2].telephone;
    document.getElementById("telephone4").innerHTML= templeData.temples[3].telephone; 
  

  
   var closuresNum;
   

    for(t=0; t < templeData.temples.length; t++){

     var templeNum = t;
    
    switch (templeNum){

         case 0 :
            
              

               for(c=0;c < templeData.temples[templeNum].closures.length; c++){
                    closuresNum = c;
                    var closuresP = document.createElement("p");
                    closuresP.textContent = templeData.temples[templeNum].closures[closuresNum];
                    var position = document.getElementById("article1");
                    position.appendChild(closuresP);<br/>
                    document.getElementsByClassName("closures1").innerHTML= templeData.temples[templeNum].closures[closuresNum];

              }
              break;

             
    
         case 1 :


      
                  for(c=0;c < templeData.temples[templeNum].closures.length; c++){
                  closuresNum = c;
                  var closuresP = document.createElement("p");
                  closuresP.textContent = templeData.temples[templeNum].closures[closuresNum];
                  var position = document.getElementById("article2");
                  position.appendChild(closuresP);<br/>
                  document.getElementsByClassName("closures2").innerHTML= templeData.temples[templeNum].closures[closuresNum];

              }
              break;

    
    
         case 2 :

            
            

              for(c=0;c < templeData.temples[templeNum].closures.length; c++){
                  closuresNum = c;
                  var closuresP = document.createElement("p");
                  closuresP.textContent = templeData.temples[templeNum].closures[closuresNum];
                  var position = document.getElementById("article3");
                  position.appendChild(closuresP);<br/>
                  document.getElementsByClassName("closures3").innerHTML= templeData.temples[templeNum].closures[closuresNum];
              }
              break;
    
         case 3 :
         
                for(c=0;c < templeData.temples[templeNum].closures.length; c++){
                closuresNum = c;
                var closuresP = document.createElement("p");
                closuresP.textContent = templeData.temples[templeNum].closures[closuresNum];
                var position = document.getElementById("article4");
                position.appendChild(closuresP);<br/>
               document.getElementsByClassName("closures4").innerHTML= templeData.temples[templeNum].closures[closuresNum];
           
            
        }
        break;

      }
    }
  }


   