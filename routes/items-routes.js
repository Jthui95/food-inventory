var db = require("../models");

module.exports = function(app) {
    app.get("/api/items", function(req, res) {
        db.Food.findAll({}).then(function(dbFood) {
            res.json(dbFood);
        });
    });
    app.get("/api/items/location/:location", function(req, res) {
        db.Food.findAll({
          where: {
            location: req.params.location
          }
        })
          .then(function(dbFood) {
            res.json(dbFood);
          });
      });
    
      // Get route for retrieving a single item
      app.get("/api/items/:id", function(req, res) {
        db.Food.findOne({
          where: {
            id: req.params.id
          }
        })
          .then(function(dbFood) {
            res.json(dbFood);
          });
      });
    
      // POST route for saving a new item
      app.post("/api/items", function(req, res) {
        db.Food.create({
          name: req.body.name,  
          expiration: req.body.expiration,
          quantity: req.body.quantity,
          location: req.body.location,
          description: req.body.description,
          photo: req.body.photo
        })
          .then(function(dbFood) {
            res.json(dbFood);
          });
      });
    
      // DELETE route for deleting items
      app.delete("/api/items/:id", function(req, res) {
        db.Food.destroy({
          where: {
            id: req.params.id
          }
        })
          .then(function(dbFood) {
            res.json(dbFood);
          });
      });
    
      // PUT route for updating items
      app.put("/api/items", function(req, res) {
        db.Food.update(req.body,
          {
            where: {
              id: req.body.id
            }
          })
          .then(function(dbFood) {
            res.json(dbFood);
          });
      });
};