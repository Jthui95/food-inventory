// var path = require("path");
// var db = require("../models");

module.exports = function(app) {
    app.get("/", function(req, res) {
        res.render("index");
    });

    app.get("/create-item", function(req, res) {
        res.render("create-item");
    });

    app.get("/view-fridge", function(req, res) {
        // var hbsObject = {
        //     cats: data
        //   };
        // console.log(hbsObject);
        res.render("view-fridge", hbsObject);
    });

    app.get("/view-freezer", function(req, res) {
        // var hbsObject = {
        //     cats: data
        //   };
        // console.log(hbsObject);
        res.render("view-freezer", hbsObject);
    });

    app.get("/view-pantry", function(req, res) {
        // var hbsObject = {
        //     cats: data
        //   };
        // console.log(hbsObject);
        res.render("view-pantry", hbsObject);
    });
};