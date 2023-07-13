const router = require("express").Router()
const controller = require("../controllers/auth")
const middleware = require("../middleware")

router.post("/signin", controller.Signin)
router.post("/signup", controller.Signup)
router.put(
  "/password-update/:user_id",
  middleware.stripToken,
  middleware.verifyToken,
  controller.PasswordUpdate
)
router.get(
  "/session",
  middleware.stripToken,
  middleware.verifyToken,
  controller.CheckSession
)

module.exports = router
