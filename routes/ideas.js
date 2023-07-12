const router = require("express").Router()
const controller = require("../controllers/ideas")
const middleware = require("../middleware")

router.get("/", controller.index)
