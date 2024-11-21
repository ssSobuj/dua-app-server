const db = require("../config/db");

exports.getDuasBySubcategoryId = (subcatId, callback) => {
  const query = `SELECT * FROM dua WHERE subcat_id = ?`;
  db.all(query, [subcatId], callback);
};

exports.getDuaById = (id, callback) => {
  const query = `SELECT * FROM dua WHERE id = ?`;
  db.get(query, [id], callback);
};

exports.getAllDua = (callback) => {
  const query = `SELECT * FROM dua`;
  db.all(query, [], callback); // Use `db.all` instead of `db.get` to fetch all rows
};

exports.getDuasByCategoryId = (categoryId, callback) => {
  const query = `SELECT * FROM dua WHERE cat_id = ?`;
  db.all(query, [categoryId], callback);
};
