var models = require('../models');

var defaultCorsHeaders = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10 // Seconds.
};

var headers = defaultCorsHeaders;

module.exports = {
  messages: {
    get: function (req, res) {
      console.log("we did a get request");
      models.messages.get(function(error,results) {
        if(error){
          res.sendStatus(500);
          res.end(); 
        } else {
          console.log(results);
          res.send(results);
        }
      });
    }, // a function which handles a get request for all messages


    post: function (req, res) { // a function which handles posting a message to the database
      var username = req.body.usename;
      var message = req.body.text;
      console.log("resuest body",req.body);
      models.messages.post(username,message, function(error,results){
        if(error) {
          res.sendStatus(500);
        } else {
          res.sendStatus(200);
        } 
      });

    },
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

