var db = require('../db');

var connection = db.dbconnection;



module.exports = {
  messages: {
    get: function (callback) {
      // get data from our db
      // a function which produces all the messages
      connection.query('SELECT * FROM test', function(error, results) {
        if(error){
          callback(error);
        }
        callback(null,results);
      });
    },

    post: function (message,roomname,callback) {
      console.log(JSON.stringify(message),JSON.stringify(roomname));

      var queryString = 'INSERT INTO test (text, roomname) VALUES ('+JSON.stringify(message)+','+JSON.stringify(roomname)+')';
      // var inserts = [message,roomname];
      console.log(queryString);
      
      connection.query(queryString, function(error, results) {
        if(error) {
          console.log(error);
        } else {
          console.log(results); 
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

