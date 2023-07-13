const router = require("express").Router()
const controller = require("../controllers/auth")
const middleware = require("../middleware")

router.post("/signin", controller.Signin)
router.post("/register", controller.Signup)
router.put(
  "/update/:user_id",
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdatePassword
)
router.get(
  "/session",
  middleware.stripToken,
  middleware.verifyToken,
  controller.CheckSession
)

module.exports = router
