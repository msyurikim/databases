var db = require('../db').dbConnection;

module.exports = {
  messages: {
    // a function which produces all the messages
    get: function (callback) {
      var query = 'SELECT messages.id, messages.text, users.username, messages.roomname FROM messages LEFT OUTER JOIN users ON (messages.userID = users.ID)';
      //get query from db --> send results back to controllers
      db.query(query, (err, results) => {
        callback(err, results);
      });
    },
    // a function which can be used to insert a message into the database
    post: function (messageParams, callback) {
      var query = 'INSERT INTO messages(text, userID, roomname) \
                  value (?, (SELECT ID FROM users where username = ?), ?)';
      db.query(query, messageParams, (err, results) => {
        callback(err, results);
      });
    }
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      var query = 'SELECT * FROM users';
      db.query(query, (err, results) => {
        callback(err, results);
      });
    },
    post: function (params, callback) {
      var query = 'INSERT INTO users(username) values (?)';
      db.query(query, params, (err, results) => {
        callback(err, results);
      });
    }
  }
};

