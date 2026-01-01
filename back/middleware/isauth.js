import jwt from "jsonwebtoken"

const isAuth = async (req, res, next) => {
  try {
    const token = req.cookies?.token

    if (!token) {
      return res.status(401).json({ message: "No token provided" })
    }

    const verifyToken = jwt.verify(token, process.env.JWT_SECRET)

    if (!verifyToken) {
      return res.status(401).json({ message: "Invalid token" })
    }

    req.userId = verifyToken.userId
    next()

  } catch (error) {
    return res.status(401).json({
      message: `Auth error: ${error.message}`
    })
  }
}

export default isAuth
