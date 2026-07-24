const express = require("express");
const router = express.Router();

const { loginAdmin } = require("../controllers/authController");

router.post("/login", loginAdmin);

router.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Auth Route Working",
  });
});

module.exports = router;