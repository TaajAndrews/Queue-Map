const router = require("express").Router()
const controller = require("../controllers/ideas")
// const middleware = require("../middleware")

router.get("/", controller.index)
router.post("/", controller.create)
router.put("/:idea_id", controller.update)
router.delete("/:idea_id", controller.deleteIdea)

module.exports = router
