const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");

const login = async (req, res) => {
  const user = await User.findOne({ spotify_id: req.body.spotify_id });
  if (!user) {
    const createUser = await User.create({ ...req.body });
    res
      .status(StatusCodes.CREATED)
      .json({ user: createUser, msg: "User Created" });
  } else {
    res.status(StatusCodes.OK).json({ user, msg: "User Found" });
  }
};

module.exports = { login };
