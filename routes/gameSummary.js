const express = require("express");
const { saveGame } = require("../controllers/gameSummary");
const router = express.Router();

router.route("/").post(saveGame);

module.exports = router;
