var db = require('../db').dbConnection;

module.exports = {
  messages: {
    get: ((err, rows) => {

      // db.query('SELECT * FROM messages');
      // if (err) {
      //   callback(err);
      // } else {
      //   callback(null, rows);
      // }
    }), // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

