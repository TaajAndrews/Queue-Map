const router = require("express").Router()
const controller = require("../controllers/IdeaController")
const middleware = require("../middleware")

router.get("/", controller.GetIdeas)
router.get("/savedIdeas/ids/:userID", controller.getSavedIdeas)
router.get("/savedIdeas/:userID", controller.savedIdeas)
router.post(
  "/",
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateIdea
)
router.put(
  "/:idea_id",
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateIdea
)
router.delete(
  "/:idea_id",
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteIdea
)

module.exports = router
