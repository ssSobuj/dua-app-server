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

exports.getDuasByCategoryAndSubcategory = (req, res) => {
  const { cat_id, subcat_id } = req.query;

  // Validate category ID
  if (!cat_id) {
    return res.status(400).json({ error: "cat_id is required" });
  }

  // If only cat_id is provided
  if (!subcat_id) {
    duaModel.getDuasByCategoryId(cat_id, (err, rows) => {
      if (err) {
        console.error("Database error:", err.message);
        return res.status(500).json({ error: err.message });
      }

      if (!rows.length) {
        return res
          .status(404)
          .json({ error: "No Duas found for this category" });
      }

      res.json(rows);
    });
  } else {
    // If both cat_id and subcat_id are provided
    duaModel.getDuasByCategoryAndSubcategory(cat_id, subcat_id, (err, rows) => {
      if (err) {
        console.error("Database error:", err.message);
        return res.status(500).json({ error: err.message });
      }

      if (!rows.length) {
        return res.status(404).json({
          error: "No Duas found for this category and subcategory",
        });
      }

      res.json(rows);
    });
  }
};
