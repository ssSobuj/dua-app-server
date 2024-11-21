// const express = require("express");
// const bodyParser = require("body-parser");
// const apiRoutes = require("./routes/api");

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(bodyParser.json());
// app.use("/api", apiRoutes);

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`); // Use backticks here
// });

const express = require("express");
const bodyParser = require("body-parser");
const apiRoutes = require("./routes/api");

const app = express();

app.use(bodyParser.json());
app.use("/api", apiRoutes);

module.exports = app;
