const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const { NotFoundError } = require("../errors");

const saveGame = async (req, res) => {
  const { score, title, img, id } = req.body;
  const user = await User.findOneAndUpdate(
    { spotify_id: id },
    { topScores: [{ score, title, img }] },
    { new: true, runValidators: true }
  );
  if (!user) {
    throw new NotFoundError(`No job with id ${id}`);
  }
  res.status(StatusCodes.OK).json({ user });
};

const getScores = async (req, res) => {};

module.exports = { saveGame, getScores };
