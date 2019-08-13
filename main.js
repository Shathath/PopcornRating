import {HomeContainer} from './home-container.js';
import {Listcontainer} from './list-container.js';
import {Images} from './img-card.js';
//create Root Container
var homecontainer = new HomeContainer();
homecontainer.hphase = 'initial-hp1';
document.body.append(homecontainer);

//create list container
var listcontainer = new Listcontainer();
homecontainer.append(listcontainer);

//creating image card



window.onload = () => {
    
   async function getData()
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        
     var request =  await fetch('https://tv-v2.api-fetch.website/movies/1').then((request)=>{
           console.log(request)
            return new Promise((resolve,reject) =>{
            setTimeout(function(){
               // console.log(request.json())
                resolve(request.json());
            },1000)
            
        })
     }
            
              
     ).then((data)=>{data.forEach(movie =>{
            var imagecard = new Images();
            
            imagecard.src = movie.images['poster'];
            //imagecard.textContent ="hello worls"
            imagecard.title = movie;
            listcontainer.appendChild(imagecard);
            
     })})   
           
                



    }
    getData();
}
$(document).ready(function(){
    $('home-container').hover(function(){
        $(this).toggleClass('home');

              $('img-card').hover(
                function () {
                    $(this).addClass("title_hover");
                  },
                  function () {
                    $(this).removeClass("title_hover");
                  }
                  
            
        
        
        
      );
                })
            });
