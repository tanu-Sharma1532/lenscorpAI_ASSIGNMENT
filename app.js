const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const routes = require("./routes/lensroutes");
const dbConnect = require("./init/database");
const path = require("path");

require("dotenv").config();

// const PORT = process.env.PORT || 3000; // Defaulting to 3000 if PORT environment variable is not set

app.use(cors()); // All origins allowed for now
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/lenscorp/ai', routes); // Routes setup
app.get("/",(req,res)=>{
    app.use(express.static(path.resolve(__dirname,"frontend","build")));
    res.sendFile(path.resolve(__dirname,"frontend","build","index.html"));
})

app.listen(3001, () => {
    console.log("SERVER IS RUNNING AT PORT" );
});

dbConnect(); // Database connection
