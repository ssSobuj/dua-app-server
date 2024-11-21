const db = require("../config/db");

exports.getSubcategoriesByCategoryId = (catId, callback) => {
  const query = `SELECT * FROM sub_category WHERE cat_id = ?`;
  db.all(query, [catId], callback);
};
