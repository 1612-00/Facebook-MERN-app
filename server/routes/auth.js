const router = require("express").Router();
const { Model } = require("mongoose");
const User = require("../models/User");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

// @route POST api/auth/register
// @desc Register user
// @access Public
router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password)
    return res
      .status(400)
      .json({ success: false, message: "Missing username, email or password" });

  try {
    // Check for existing email
    const user = await User.findOne({ email });

    if (user)
      return res
        .status(400)
        .json({ success: false, message: "User already taken" });

    // All good
    const hashedPassword = await argon2.hash(password);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      profilePicture: "",
      coverPicture: "",
      followers: [],
      followings: [],
      desc: "",
      lives: "",
      from: "",
      relationship: [],
    });
    await newUser.save();

    // Return token
    const accessToken = jwt.sign(
      { userId: newUser._id },
      process.env.ACCESS_TOKEN_SECRET
    );

    return res.status(200).json({
      success: true,
      message: "User created successfully",
      accessToken,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "internal server error", error });
  }
});

// @route POST api/auth/login
// @desc Login user
// @access Public
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res
      .status(400)
      .json({ success: false, message: "Missing email or password" });

  try {
    // Check for existing email
    const user = await User.findOne({ email });

    if (!user)
      return res
        .status(400)
        .json({ success: false, message: "Incorrect email" });

    // Email found
    const passwordValid = await argon2.verify(user.password, password);
    if (!passwordValid)
      return res
        .status(400)
        .json({ success: false, message: "Incorrect password" });

    // Return token
    const accessToken = jwt.sign(
      { userId: user._id },
      process.env.ACCESS_TOKEN_SECRET
    );

    return res.status(200).json({
      success: true,
      message: "User logged successfully",
      accessToken,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "internal server error", error });
  }
});

module.exports = router;
