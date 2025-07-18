const express = require("express");
const router = express.Router();
const { checkGrammar } = require("../controllers/grammarController");

router.post("/", checkGrammar);

module.exports = router;
