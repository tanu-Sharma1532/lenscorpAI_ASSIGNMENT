const mongoose = require("mongoose");

const Signschema = new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    },
    role:{
        type : String,
        enum:["Admin","Visitor"],
    }
});

module.exports= mongoose.model("User",Signschema);