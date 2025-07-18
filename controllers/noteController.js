const fs = require("fs-extra");
const path = require("path");
const { marked } = require("marked");
const { error } = require("console");

const NOTES_DIR = path.join(__dirname, "..", "uploads");

module.exports.saveNote = async (req, res) => {
  const { filename, content } = req.body;
  if (!filename || !content) {
    return res.status(400).json({ error: "Missing filename or content" });
  }

  try {
    const filePath = path.join(NOTES_DIR, filename);
    await fs.outputFile(filePath, content);
    res.json({ message: "Note saved successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to save note" });
  }
};

module.exports.listNotes = async (req, res) => {
  try {
    const files = await fs.readdir(NOTES_DIR);
    res.json(files);
  } catch (error) {
    res.status(500).json({ error: "Failed to list notes" });
  }
};

module.exports.renderNote = async (req, res) => {
  const filename = req.params.filename;
  const filepath = path.join(NOTES_DIR, filename);

  try {
    const content = await fs.readFile(filepath, "utf-8");
    const html = marked.parse(content);
    res.send(html);
  } catch (error) {
    res.status(404).json({ error: "Note not found" });
  }
};
