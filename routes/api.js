const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");
const subCategoryController = require("../controllers/subCategoryController");
const duaController = require("../controllers/duaController");

// Category routes
router.get("/categories", categoryController.getCategories);
router.get("/categories/:id", categoryController.getCategory);

// Subcategory routes
router.get("/subcategories", subCategoryController.getSubcategoriesByCategory); // Modified to work with query parameter

// Dua routes
router.get("/duas", duaController.getAllDua);
router.get("/duas/filter", duaController.getDuasByCategoryAndSubcategory); // Filter Duas by cat_id and subcat_id
router.get("/duas/:duaId", duaController.getDuaById);
router.get(
  "/subcategories/:subcatId/duas",
  duaController.getDuasBySubcategoryId
);
router.get("/categories/:catId/duas", duaController.getDuasByCategoryId);

module.exports = router;
