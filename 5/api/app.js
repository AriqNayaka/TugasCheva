require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mahasiswaRoutes = require("./routes/mahasiswaRoutes");
const db = require("./config/db");
require("./models/index"); // Import models to ensure they are registered

const app = express();
app.use(cors());
app.use(express.json());
app.use("/mahasiswa", mahasiswaRoutes);

const PORT = process.env.PORT || 5000;

db.authenticate()
  .then(() => {
    console.log("Database connected successfully!");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
