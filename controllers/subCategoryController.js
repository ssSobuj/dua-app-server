const subCategoryModel = require("../models/subCategoryModel");

// Get subcategories by category ID
exports.getSubcategoriesByCategory = (req, res) => {
  const { catId } = req.params;
  subCategoryModel.getSubcategoriesByCategoryId(catId, (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!rows.length)
      return res
        .status(404)
        .json({ error: "No subcategories found for this category" });
    res.json(rows);
  });
};

// Get all subcategories
exports.getSubcategories = (req, res) => {
  subCategoryModel.getAllSubcategories((err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
};
