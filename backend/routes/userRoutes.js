const express = require ('express');
const { 
    registerUser, 
    loginUser, 
    logoutUser,
    getUser,
    updateUser,
    changePassword } = require('../controllers/userController');
const router = express.Router();
const protect = require("../middleware/authMiddleware");
const User = require("../models/auth/userModel");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", logoutUser);
router.get("/user", protect, getUser);
router.patch("/user", protect, updateUser);
router.patch("/change-password", protect, changePassword);

// Fetch the logged-in user's data
router.get('/users/me', protect, async (req, res) => {
    try {
      const user = await User.findById(req.user._id).select('-password'); // Fetch user data without the password
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json(user); // Return the user data
    } catch (error) {
      console.error("Error fetching user data:", error);
      res.status(500).json({ message: "Server Error" });
    }
  });


module.exports = router;