var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      var allData = JSON.stringify(res);
      res.end(allData);
    }, // a function which handles a get request for all messages
    // send respone & call the model

    var defaultCorsHeaders = {
      "access-control-allow-origin": "*",
      "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
      "access-control-allow-headers": "content-type, accept",
      "access-control-max-age": 10 // Seconds.
    };

    post: function (req, res) { // a function which handles posting a message to the database
      var body = '';
      req.on('data', function (chunk) {
        body += chunk;
      });
      req.on('end', function () {
        var parsedData = JSON.parse(body);
        res.results.push(parsedData);
        res.writeHead(200, headers); 
        res.end(JSON.stringify(parsedData));
      });
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

