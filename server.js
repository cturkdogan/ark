const http = require("http");
const express = require("express");
const path = require("path");
const logger = require("morgan");
const bodyParser = require("body-parser");
// setup the express app
const app = express();
const port = parseInt(process.env.port, 10) || 8080;
app.set("port", port);
const server = http.createServer(app);
server.listen(port);

// let's log to console
app.use(logger("dev"));

// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//setup a default catch-up route
require("./server/routes")(app);
app.get('/api/*', (req,res) => res.status(200).send({message: "Welcome to the ORCA",}));