import {Images} from './img-card.js';

import {listcontainer} from './main.js';

  export async function getData()
     {// code for IE7+, Firefox, Chrome, Opera, Safari
         
      var request =  await fetch('https://tv-v2.api-fetch.website/movies/1').then((request)=>{
            console.log(request)
             return new Promise((resolve,reject) =>{
             setTimeout(function(){
                // console.log(request.json())
                 resolve(request.json());
             },500)
             
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

 
 