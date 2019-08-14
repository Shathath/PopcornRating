import {HomeContainer} from './home-container.js';
import {Listcontainer} from './list-container.js';
import {getData} from './loaddata.js';

//create Root Container
var homecontainer = new HomeContainer();
homecontainer.hphase = 'initial-hp1';
document.body.append(homecontainer);

//create list container
var listcontainer = new Listcontainer();
homecontainer.append(listcontainer);

//creating image card

window.onload = () => {
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
export {listcontainer}