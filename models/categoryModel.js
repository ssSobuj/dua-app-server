const db = require("../config/db");

exports.getCategories = (query, params, callback) => {
  db.all(query, params, callback); // Pass the query and params to the database
};

exports.getCategoryById = (id, callback) => {
  const query = `SELECT * FROM category WHERE id = ?`;
  db.get(query, [id], callback);
};
