const sequelize = require("../config/db");
const Mahasiswa = require("./mahasiswaModel");

sequelize
  .sync()
  .then(() => {
    console.log("Database Synchronized!");
  })
  .catch((error) => {
    console.error("Error synchronizing database:", error);
  });

module.exports = { Mahasiswa };
