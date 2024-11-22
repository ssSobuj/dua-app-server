const categoryModel = require("../models/categoryModel");

// Get categories with optional search filter
exports.getCategories = (req, res) => {
  const { search } = req.query; // Get the search query parameter

  const query = search
    ? `SELECT * FROM category WHERE cat_name_en LIKE ?`
    : `SELECT * FROM category`;

  // If search is provided, use the LIKE operator to search by category name
  const params = search ? [`%${search}%`] : [];

  categoryModel.getCategories(query, params, (err, rows) => {
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
