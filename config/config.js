require("dotenv").config();

const config = {
  port: process.env.PORT || 3000,
  dbURI: process.env.DB_URI,
  jwtSecret: process.env.JWT_SECRET || "your_default_secret",
  nodeEnv: process.env.NODE_ENV || "development",
};

module.exports = config;
