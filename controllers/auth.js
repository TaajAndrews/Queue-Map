const { User } = require("../models/user")
const middleware = require("../middleware/")

const Signin = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    let passwordMatch = await middleware.comparePassword(
      user.passwordDigest,
      password
    )
    if (passwordMatch) {
      let payload = {
        id: user.id,
        email: user.email,
      }
      let token = middleware.createToken(payload)
      return res.send({ user: payload, token })
    }
    res.status(401).send({ status: "Error", msg: "Unauthorized" })
  } catch (error) {
    console.log(error)
    res.status(401).send({ status: "Error", msg: "An error has occurred!" })
  }
}

const Signup = async (req, res) => {
  try {
    const { email, password, username } = req.body
    let passwordDigest = await middleware.hashPassword(password)
    let existingUser = await User.findOne({ email })
    if (existingUser) {
      return res
        .status(400)
        .send(
          "A user exists with that email. Please sign in with your credentials."
        )
    } else {
      const user = await User.create({ username, email, passwordDigest })
      res.send(user)
    }
  } catch (error) {
    throw error
  }
}

const PasswordUpdate = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body
    let user = await User.findById(req.params.user_id)
    let passwordMatch = await middleware.comparePassword(
      user.passwordDigest,
      oldPassword
    )
    if (passwordMatch) {
      let passwordDigest = await middleware.hashPassword(newPassword)
      user = await User.findByIdAndUpdate(req.params.user_id, {
        passwordDigest,
      })
      let payload = {
        id: user.id,
        email: user.email,
      }
      return res.send({ status: "Password Successfully Updated" })
    }
    res
      .status(401)
      .send({ status: "Error", msg: "Oh no! Your old password was incorrect." })
  } catch (error) {
    console.log(error)
    res
      .status(401)
      .send({
        status: "Error",
        msg: "An error has occurred updating your password",
      })
  }
}

module.exports = {
  Signin,
  Signup,
  PasswordUpdate,
}
