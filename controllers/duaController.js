const duaModel = require("../models/duaModel");

exports.getDuas = (req, res) => {
  const { subcatId } = req.params;
  duaModel.getDuasBySubcategoryId(subcatId, (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
};

exports.getAllDua = (req, res) => {
  duaModel.getAllDua((err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
};

exports.getDua = (req, res) => {
  const { id } = req.params;
  duaModel.getDuaById(id, (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!row) return res.status(404).json({ error: "Dua not found" });
    res.json(row);
  });
};
