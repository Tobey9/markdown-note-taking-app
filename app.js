const express = require("express");
const cors = require("cors");

const grammarRoutes = require("./routes/grammarRoutes");
const noteRoutes = require("./routes/noteRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/grammar", grammarRoutes);
app.use("/api/notes", noteRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
