// Wrapper class for Documenu API
// Searches for restaurants using '/restaurants/search/fields' and '/restaurants/search/geo'.
// Combines results from both searches.
// "Import" using 'var RestaurantSearch = require('./RestaurantSearch.js');'

// Mostly tested, but still a WIP, expect errors.
// In near future will add menu item searches.

const documenu = require('documenu')
documenu.configure('b1c43411dbab1f3fa1c58961bab4013a')