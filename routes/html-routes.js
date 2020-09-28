var db = require("../models");

module.exports = function(app) {
    app.get("/", function(req, res) {
        res.render("index");
    });

    app.get("/create-item", function(req, res) {
        res.render("create-item");
    });

    app.get("/view-fridge", function(req, res) {
        db.Food.findAll({
            where: {
                location: 'Refrigerator'
            }
        }).then(function(dbFridge) {
            var fridgeFoodArray = [];
            dbFridge.forEach(food => fridgeFoodArray.push(food.dataValues));
            var hbsObjectFridge = {
                items: fridgeFoodArray
            };
            res.render("view-fridge", hbsObjectFridge);
        });
    });

    app.get("/view-freezer", function(req, res) {
        db.Food.findAll({
            where: {
                location: 'Freezer'
            }
        }).then(function(dbFreezer) {
            var freezerFoodArray = [];
            dbFreezer.forEach(food => freezerFoodArray.push(food.dataValues));
            var hbsObjectFreezer = {
                items: freezerFoodArray
            };
            res.render("view-freezer", hbsObjectFreezer);
        });
    });

    app.get("/view-pantry", function(req, res) {
        db.Food.findAll({
            where: {
                location: 'Pantry'
            }
        }).then(function(dbPantry) {
            var pantryFoodArray = [];
            dbPantry.forEach(food => pantryFoodArray.push(food.dataValues));
            var hbsObjectPantry = {
                items: pantryFoodArray
            };
            res.render("view-pantry", hbsObjectPantry);
        });
    });
    app.get("/tutorial", function(req, res) {
        res.render("tutorial");
    });
};