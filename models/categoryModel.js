const db = require("../config/db");

exports.getAllCategories = (callback) => {
  const query = `SELECT * FROM category`;
  db.all(query, [], callback);
};

exports.getCategoryById = (id, callback) => {
  const query = `SELECT * FROM category WHERE id = ?`;
  db.get(query, [id], callback);
};
