const User = require('../models/userModel');

exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findByCredentials(username, password);

        if (user) {
            res.status(200).json({ success: true, message: "Login successful", username: user.user_name });
        } else {
            res.status(401).json({ success: false, message: "Invalid credentials" });
        }
    } catch (error) {
        console.error("DATABASE ERROR:", error); // <--- ADD THIS LINE
        res.status(500).json({ success: false, message: "Server error" });
    }
};