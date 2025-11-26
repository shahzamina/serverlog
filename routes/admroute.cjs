// routes/admroute.cjs
const express = require("express");
const router = express.Router();

const { loginAdmin } = require("../controllers/admcom.cjs");
const verifyAdmin = require("../middleware/admval.cjs");

// ✅ Only protect routes that need admin access, not the login route
router.post("/login", loginAdmin);

// Example protected route
router.get("/dashboard", verifyAdmin, (req, res) => {
  res.json({ message: "Welcome Admin!", admin: req.admin });
});

module.exports = router;
