const { where } = require("sequelize");
const User = require("../../models/User");
const bcrypt = require("bcrypt");

const signUp = async (credentials, res) => {
  const { username, name, email, password, school, firstName, birthCity } =
    credentials;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ where: { username } });

    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = await User.create({
      username,
      name,
      email,
      password: hashedPassword,
      school: school,
      firstName: firstName,
      birthCity: birthCity,
    });

    res.status(201).json({
      message: "User created successfully",
      user: newUser,
    });
  } catch (error) {
    console.error("Sign-up Error:", error);

    if (error.name === "SequelizeDatabaseError") {
      res.status(500).json({ message: "Database error" });
    } else {
      res.status(500).json({ message: "Internal server error" });
    }
  }
};

module.exports = { signUp };
