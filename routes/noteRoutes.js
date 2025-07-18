const express = require("express");
const router = express.Router();
const {
  saveNote,
  listNotes,
  renderNote,
} = require("../controllers/noteController");

router.post("/", saveNote);
router.get("/", listNotes);
router.get("/:filename/render", renderNote);

module.exports = router;
