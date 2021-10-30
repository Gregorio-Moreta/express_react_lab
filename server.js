//  Import Dependencies
const express = require("express");
const cors = require("cors");

//  Import Json files 
const projects = require("./projects.json");
const about = require("./about.json");

//  Create our app object
const app = express();

//  Set up middleware
app.use(cors());

//  Home route for testing our app
app.get("/", (req, res) => {
    res.send("Hello World");
});

//  Route for retrieving projects
app.get("/projects", (req, res) => {
    res.json(projects);
});

//  Route for retrievign about information
app.get("/about", (req, res) => {
    //  Send projects via JSON
    res.json(about);
});

//  Declare a variable for our port number
const PORT = process.env.PORT || 4000;

//  Turn on the server listener
app.listen(PORT, () => console.log(`Listening on ${PORT}`));