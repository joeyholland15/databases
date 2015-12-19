var db = require('../db');

var connection = db.dbconnection;



module.exports = {
  messages: {
    get: function (callback) {
      // get data from our db
      // a function which produces all the messages
      console.log("running query")
      connection.query('SELECT * FROM test', function(error, results) {
        if(error){
          callback(error);
        }
        callback(null,results);
      });
    },

    post: function (username,message,callback) {
      console.log("inside model",JSON.stringify(username),JSON.stringify(message));
      var lobby = 'lobby'
      var queryString = 'INSERT INTO test (text, roomname) VALUES ('+JSON.stringify(message)+','+JSON.stringify(lobby)+')';
      // var inserts = [message,roomname];
      console.log(queryString);
      
      connection.query(queryString, function(error, results) {
        if(error) {
          console.log(error);
          callback(error);
        } else {
          callback(null,results); 
        }
      }); 
    } 
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

