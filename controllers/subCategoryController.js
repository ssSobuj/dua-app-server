const subCategoryModel = require("../models/subCategoryModel");

exports.getSubcategories = (req, res) => {
  const { catId } = req.params;
  subCategoryModel.getSubcategoriesByCategoryId(catId, (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
};
