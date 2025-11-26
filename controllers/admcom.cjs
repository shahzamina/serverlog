const jwt = require("jsonwebtoken");

const loginAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;
console.log("👉 Incoming Login Request:");
    console.log("Received from frontend:", username, password);
    console.log("Expected (from .env):", process.env.ADMIN_USERNAME, process.env.ADMIN_PASSWORD);

    // ✅ Check credentials from .env
    if (
      username === process.env.ADMIN_USERNAME &&
      password === process.env.ADMIN_PASSWORD
    ) {
      // Create JWT token
      const token = jwt.sign(
        { username: process.env.ADMIN_USERNAME },
        process.env.JWT_SECRET,
        { expiresIn: "2h" }
      );

      return res.status(200).json({
        success: true,
        message: "Login successful",
        token,
      });
    } else {
      return res.status(401).json({
        success: false,
        message: "Invalid username or password",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

module.exports = { loginAdmin };
