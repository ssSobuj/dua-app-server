const categoryModel = require("../models/categoryModel");

exports.getCategories = (req, res) => {
  categoryModel.getAllCategories((err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
};

exports.getCategory = (req, res) => {
  const { id } = req.params;
  categoryModel.getCategoryById(id, (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!row) return res.status(404).json({ error: "Category not found" });
    res.json(row);
  });
};
