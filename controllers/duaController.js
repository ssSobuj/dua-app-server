const duaModel = require("../models/duaModel");

exports.getDuasBySubcategoryId = (req, res) => {
  const { subcatId } = req.params;
  duaModel.getDuasBySubcategoryId(subcatId, (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!rows.length)
      return res
        .status(404)
        .json({ error: "No Duas found for this subcategory" });
    res.json(rows);
  });
};

// Get a Dua by ID
exports.getDuaById = (req, res) => {
  const { duaId } = req.params;
  duaModel.getDuaById(duaId, (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!row) return res.status(404).json({ error: "Dua not found" });
    res.json(row);
  });
};

// Get all Duas
exports.getAllDua = (req, res) => {
  duaModel.getAllDua((err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
};

// Get Duas by Category ID
exports.getDuasByCategoryId = (req, res) => {
  const { catId } = req.params;
  duaModel.getDuasByCategoryId(catId, (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!rows.length)
      return res.status(404).json({ error: "No Duas found for this category" });
    res.json(rows);
  });
};
