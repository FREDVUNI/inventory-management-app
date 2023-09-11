const User = require("../models/User");
const jwt = require("jsonwebtoken");

const protect = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json("You're not authorized");
    }

    const verified = jwt.verify(token, process.env.SECRET_KEY);

    const user = await User.findById(verified._id).select("-password");

    if (!user) {
      return res.status(401).json("You're not authorized");
    }
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json("You're not authorized");
  }
};

const authGuard = async (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    const token = req.headers.authorization.split(" ")[1];
    try {
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      const user = await User.findById(decoded._id);
      if (!user) {
        return res.status(401).json("User not found");
      }
      req.user = user;
      next();
    } catch (error) {
      return res.status(401).json("Token invalid");
    }
  } else {
    return res.status(401).json("No token provided");
  }
};

const adminGuard = (req, res, next) => {
  if (req.user && req.user.admin) {
    next();
  } else {
    let error = new Error("Not authorized as an admn");
    error.statusCode = 401;
    return next(error);
  }
};

module.exports = { protect, authGuard, adminGuard };
