const mongoose = require("mongoose");
const User = require('./Signup');

const employeeschema = new mongoose.Schema(
    {
        user_Id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            default: " ",
        },
        name: {
            type: String,
            required: true,
        },
        Profile: {
            type: String,
        },
    }
);

module.exports = mongoose.model("employees", employeeschema);