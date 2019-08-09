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
var imagecard = new Images();
listcontainer.appendChild(imagecard);


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
          var image = document.createElement('img');
          image.src = movie.images['poster'];
          document.body.appendChild(image);
          console.log(movie.images['poster']);
     })})   
           
                



    }
    getData();
}