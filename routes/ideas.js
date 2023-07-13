const router = require("express").Router()
const controller = require("../controllers/ideas")
const middleware = require("../middleware")

router.get("/", middleware.stripToken, middleware.verifyToken, controller.index)
router.post(
  "/",
  middleware.stripToken,
  middleware.verifyToken,
  controller.create
)
router.put(
  "/:idea_id",
  middleware.stripToken,
  middleware.verifyToken,
  controller.update
)
router.delete(
  "/:idea_id",
  middleware.stripToken,
  middleware.verifyToken,
  controller.deleteIdea
)

module.exports = router
