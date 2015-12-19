var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      console.log("we did a get request");
      models.messages.get(function(error,results) {
        if(error){
          res.sendStatus(500);
        } else {
          res.send(results);
        }
      });
    }, // a function which handles a get request for all messages


    post: function (req, res) { // a function which handles posting a message to the database
      var message = req.body.message
  
      console.log("message from controller",message);
      var roomname = req.body.roomname
      models.messages.post(message,roomname)

    },
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

