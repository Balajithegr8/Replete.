const express = require("express");
const ejs = require("ejs");
const { config } = require("dotenv")
const path = require('path');

const app = express();

let intialPath = path.join(__dirname, "views");

app.use(express.json());
app.use(express.static(__dirname));

app.set("view engine", "ejs");

app.get("/login", (req, res) => {
    res.render("login")
});

app.get("/rest-or-org", (req,res) => {
    res.render("rest-or-org")
});

app.get("/registration-restaurant", (req,res) => {
    res.render("registration-restaurant")
});

app.get("/registration-organisation", (req,res) => {
    res.render("registration-organisation")
});

app.get("/restaurantSide", (req,res) => {
    res.render("restaurantSide")
});

app.get("/restaurantProfile", (req,res) => {
    res.render("restaurantProfile")
});

app.get("/restaurantDonation", (req,res) => {
    res.render("restaurantDonation")
});

app.get("/organisation", (req,res) => {
    res.render("organisation")
});

app.listen(process.env.PORT,  () => {
    console.log("Server start on port 7000")
});