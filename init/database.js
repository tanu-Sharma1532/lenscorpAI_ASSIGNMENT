const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = () => {
    mongoose.connect("mongodb+srv://softdeep065:Softdeep065@softdeep065.9kbktdy.mongodb.net/Test_API?retryWrites=true&w=majority")
        .then(() => console.log("DB CONNECTED"))
        .catch((error) => {
            console.log("ISSUE IN DB CONNECTION");
            console.error(error.message);
            process.exit(1);
        })
}

module.exports = dbConnect;