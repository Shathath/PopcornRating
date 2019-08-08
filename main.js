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
