var db = require("../models");

module.exports = function(app) {
    app.get("/api/items", function(req, res) {
        db.Food.findAll({}).then(function(dbFood) {
            res.json(dbFood);
        });
    });

    
};