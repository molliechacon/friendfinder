// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
// NEED TO DEFINE PORT THIS WAY AS A HEROKU REQUIREMENT!!!
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// require our html routes
require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);

