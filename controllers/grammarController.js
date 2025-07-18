const axios = require("axios");

module.exports.checkGrammar = async (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: "Text is required" });

  try {
    const response = await axios.post(
      "https://api.languagetoolplus.com/v2/check",
      null,
      {
        params: {
          text,
          language: "en-US",
        },
      }
    );

    const matches = response.data.matches;

    if (matches.length === 0) {
      return res.json({ message: "No grammar issues found." });
    }

    const suggestions = matches.map((match) => ({
      message: match.message,
      offset: match.offset,
      length: match.length,
      suggestion: match.replacements[0]?.value || null,
    }));

    res.json({ suggestions });
  } catch (err) {
    res.status(500).json({ message: "Grammar check failed" });
  }
};
