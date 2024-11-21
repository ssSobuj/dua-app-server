const db = require("../config/db");

exports.getDuasBySubcategoryId = (subcatId, callback) => {
  const query = `SELECT * FROM dua WHERE subcat_id = ?`;
  db.all(query, [subcatId], callback);
};

exports.getDuaById = (id, callback) => {
  const query = `SELECT * FROM dua WHERE id = ?`;
  db.get(query, [id], callback);
};

exports.getAllDua = (id, callback) => {
  const query = `SELECT * FROM dua`;
  db.get(query, [id], callback);
};
