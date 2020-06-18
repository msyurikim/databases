var models = require('../models');

module.exports = {
  messages: {
    // a function which handles a get request for all messages
    get: function (req, res) {
      models.messages.get((err, results) => {  //passes cb to models, and then sends data to client
        if (err) {
          console.log(err);
        } else {
          res.json(results); //json bc sending db info
        }
      });
    },
    // a function which handles posting a message to the database
    post: function (req, res) {
      //var message = req.body;
      var messageParams = [req.body.message, req.body.username, req.body.roomname];
      models.messages.post( messageParams, (err, results) => {  //passes message,cb to models (db)
        if (err) {
          console.log(err);
        } else {
          res.sendStatus(201); //eventually responds to client with success message
        }
      });
    }

  },

  users: {
    // Ditto as above
    get: function (req, res) {
      var user = req.body;
      models.users.get(user, (data) => {
        res.json(data);
      });
    },
    post: function (req, res) {
      var user = req.body;
      models.users.post(user, () => {
        res.sendStatus(201);
      });
    }
  }
};

