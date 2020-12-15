require('dotenv').config();

module.exports = {
  db: {
    url: process.env.DATABASE_URL
  },
  port: process.env.PORT || 8080,
};
