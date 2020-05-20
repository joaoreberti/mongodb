"use strict";
exports.__esModule = true;
var express = require("express");
var path = require("path");
var mongoose = require("mongoose");
var cors = require("cors");
var bodyParser = require("body-parser");
var app = express();
var port = 2999;
app.use(express.static(path.join(__dirname, './my-app/build')));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get('/', function (req, res) { return res.render('index.html'); });
app.listen(port, function () { return console.log('Listening on 3000'); });
app.get('/list', function (req, res) {
    var arrayOfSuperheroes = [];
    console.log(arrayOfSuperheroes);
    Hero.find()
        .then(function (data) {
        console.log(data);
        data.map(function (hero) { return arrayOfSuperheroes.push(hero); });
        res.send(arrayOfSuperheroes);
    })["catch"](function (err) { return console.log(err); });
    console.log(arrayOfSuperheroes);
});
app["delete"]('/delete/:hero', function (req, res) {
    Hero.remove({ name: req.params.hero }, function (result) {
        res.send(200);
        console.log(result);
    });
    Hero.find().then(function (result) { return console.log(result); });
});
app.post('/add', function (req, res) {
    var name = req.body.name;
    var superpower = req.body.powers;
    console.log(name);
    console.log(superpower);
    Hero.create({
        name: name,
        superpower: superpower
    }, function (err, hero) {
        if (err)
            return console.log(err);
    });
    res.send(200);
});
app.put('/update/:hero', function (req, res) {
    var formerName = req.body.formerName;
    var formerPowers = req.body.formerPowers;
    var name = req.body.name;
    var superpower = req.body.powers;
    Hero
        .find({ name: formerName, superpower: formerPowers })
        .update({ name: name, superpower: superpower }).then(function (result) { return result; });
});
mongoose.connect("mongodb://127.0.0.1:27017", { useNewUrlParser: true })
    .then(function (result) {
})["catch"](function (err) {
    console.log(err);
});
var heroSchema = mongoose.Schema({
    name: String,
    superpower: String
});
var Hero = mongoose.model('Hero', heroSchema);
/* Hero.create({
    name:'superman',
    superpower: 'powers from space'
}, (err, hero)=>{
    if (err) return console.log(err);
    
})

Hero.create({
    name:'spiderman',
    superpower: 'powers from spidey'
}, (err, hero)=>{
    if (err) return console.log(err);
    
})

Hero.create({
    name:'batman',
    superpower: 'powers from wealth'
}, (err, hero)=>{
    if (err) return console.log(err);
    
}) */
