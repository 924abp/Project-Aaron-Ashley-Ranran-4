const express = require("express")
const router = express.Router()
const authorController = require("../controllers/authorsController")

router.get("/:id", authorController.getAnAuthor)
router.post("/", authorController.createAnAuthor)
router.put("/:id", authorController.updateAnAuthor)
router.delete("/:id", authorController.deleteAnAuthor)

module.exports = router