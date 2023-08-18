const express = require("express")
const router = express.Router()
const recipeController = require("../controllers/recipesController")

router.get("/", recipeController.getAllRecipes)
router.get("/:id", recipeController.getARecipe)
router.get("/author/:id", recipeController.getAllRecipesFromAnAuthor)
router.post("/", recipeController.createARecipe)
router.put("/:id", recipeController.updateARecipe)
router.delete("/:id", recipeController.deleteARecipe)

module.exports = router