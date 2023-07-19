const router = require("express").Router()
const controller = require("../controllers/MapController")
const Map = require("../models/Map")
const middleware = require("../middleware")

router.post(
  "/new",
  middleware.stripToken,
  middleware.verifyToken,
  controller.createMap
)
router.delete(
  "/:map_id",
  middleware.stripToken,
  middleware.verifyToken,
  controller.deleteMap
)

router.get("/all", controller.getMaps)

module.exports = router
