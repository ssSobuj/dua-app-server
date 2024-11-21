const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");
const subCategoryController = require("../controllers/subCategoryController");
const duaController = require("../controllers/duaController");

// Category routes
router.get("/categories", categoryController.getCategories);
router.get("/categories/:id", categoryController.getCategory);

// Subcategory routes
router.get("/sub-categories/:catId", subCategoryController.getSubcategories);

// Dua routes
router.get("/duas/:subcatId", duaController.getDuas);
router.get("/duas/:subcatId", duaController.getDua);

module.exports = router;
