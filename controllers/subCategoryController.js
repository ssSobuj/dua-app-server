const subCategoryModel = require("../models/subCategoryModel");

// Get subcategories by category ID or all subcategories
exports.getSubcategoriesByCategory = (req, res) => {
  const { cat_id } = req.query; // Fetch cat_id from query parameters

  // If cat_id is provided, filter by category
  if (cat_id) {
    subCategoryModel.getSubcategoriesByCategoryId(cat_id, (err, rows) => {
      if (err) return res.status(500).json({ error: err.message });
      if (!rows.length)
        return res
          .status(404)
          .json({ error: "No subcategories found for this category" });
      res.json(rows);
    });
  } else {
    // If no cat_id is provided, fetch all subcategories
    subCategoryModel.getAllSubcategories((err, rows) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(rows);
    });
  }
};
