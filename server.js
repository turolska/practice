//server.js
const express = require('express'),
      server = express();

//const app = express();
//app.use(express.static('public')); /* this line tells Express to use the public folder as our static folder from which we can serve static files*/
server.use(express.static('public'));

var RestaurantSearch = require('./RestaurantSearch.js');
let search = new RestaurantSearch();