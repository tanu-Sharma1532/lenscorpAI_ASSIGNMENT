const jwt = require("jsonwebtoken");
const mongoose = require("mongoose"); // Import mongoose
const User = require("../models/Signup");
require("dotenv").config();
const asyncHandler = require("express-async-handler");

exports.auth = asyncHandler(async (req, res, next) => {
    let token;
    token = req.headers && req.headers["authorization"].split(' ')[1] || req.headers.authorization;

    console.log("authtoken : ", token);
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                res.status(401).json({ message: "user is not authorized" });
                console.log(err);
            } else {
                console.log("decoded", decoded);
                if (!mongoose.Types.ObjectId.isValid(decoded.id)) { // Check if decoded ID is a valid ObjectId
                    return res.status(400).json({ message: "Invalid user ID" });
                }
                console.log("auth section", decoded.id);
                req.user = decoded.id;
                next();
            }
        });

    } else {
        res.status(400).json({ message: "authorization header is missing or not valid" });
    }
});
