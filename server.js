const express = require('express');
const exphbs = require('express-handlebars')
const routes = require('./controllers/burgers_controller')

// Sets up the Express App
// =============================================================
const app = express();
// process.env lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Using the controller (router)
// =============================================================
app.use(routes)

// Setting the view engine for templating - to Handlebars
// =============================================================
app.engine('handlebars', exphbs({ defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// Starts the server 
// =============================================================
app.listen(PORT, function(){
  console.log(`Sever is listening on: http://localhost:${PORT}`)
})