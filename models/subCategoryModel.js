const db = require("../config/db");

exports.getAllSubcategories = (callback) => {
  const query = `SELECT * FROM sub_category`;
  db.all(query, [], callback); // Removed [catId]
};

exports.getSubcategoriesByCategoryId = (catId, callback) => {
  const query = `SELECT * FROM sub_category WHERE cat_id = ?`;
  db.all(query, [catId], callback);
};
