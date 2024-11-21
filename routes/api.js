const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");
const subCategoryController = require("../controllers/subCategoryController");
const duaController = require("../controllers/duaController");

// Category routes
router.get("/categories", categoryController.getCategories);
router.get("/categories/:id", categoryController.getCategory);

// Subcategory routes
router.get(
  "/categories/:catId/subcategories",
  subCategoryController.getSubcategoriesByCategory
);
router.get("/subcategories", subCategoryController.getSubcategories);

// Dua routes
// Dua routes
router.get("/duas", duaController.getAllDua); // Get all Duas
router.get("/duas/:duaId", duaController.getDuaById); // Get a single Dua by ID
router.get(
  "/subcategories/:subcatId/duas",
  duaController.getDuasBySubcategoryId
); // Get Duas by Subcategory ID
router.get("/categories/:catId/duas", duaController.getDuasByCategoryId); // Get Duas by Category ID

module.exports = router;

//sub-categoris = api/categories/1/subcategories
//categoris = api/categories
//duas = api/duas
//duas = api/duas/1
