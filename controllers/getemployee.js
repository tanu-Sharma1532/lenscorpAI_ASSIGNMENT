const employee = require("../models/employee");
const sampledata = require("../data");

const initDB = async() =>{
    sampledata.data = sampledata.data.map((obj)=>({...obj}));
    await employee.insertMany(sampledata.data);
    console.log("data was initialized");
}

exports.getemployee = async(req,res) =>{
    try{
        console.log("random get request", req.user);
       const user_id = req.user.id;
       console.log(user_id);
        //initDB();
        const employees = await employee.find({user_id});
        console.log(employees);
        res.status(200).json({
            success:true,
            data:employees,
            message:"Entire Employee data is fetched",
        });
    }catch(err){
        res.status(500).json({
            success:false,
            error:err.message,
            message:"Error in fetching data",
        })
    }
}

exports.updateemployee = async(req,res) =>{
    try{
        const {id} = req.params;
        const {Profile, Description} = req.body;
        const employeeup = await employee.findByIdAndUpdate({_id:id},{Profile,Description});
        console.log(employeeup);
        res.status(200).json({
            success:true,
            data:employeeup,
            message:"Updated Successfully",
        });
    }catch(err){
        console.log(err);
        res.status(500).json({
            success:false,
            error:err.message,
            message:"Error in Updation",
        })
    }
}

exports.createemployee = async(req,res) =>{
    try{
        const {name, Profile} = req.body;
        const user_Id = req.user;
        console.log("userid",user_Id);
        //console.log("My req",req);
        const employeecr= await employee.create({user_Id,name,Profile});
        res.status(200).json({
            success:true,
            data:employeecr,
            message:"Created Successfully",
        });
    }catch(err){
        console.log(err);
        res.status(500).json({
            success:false,
            error:err.message,
            message:"Error in Creation",
        })
    }
}

exports.findemployee = async(req,res) =>{
    try{
        const {id} = req.params;
        const employeesfind = await employee.findById({_id:id});
        console.log(employeesfind);
        res.status(200).json({
            success:true,
            data:employeesfind,
            message:"Employee data is fetched",
        });
    }catch(err){
        res.status(500).json({
            success:false,
            error:err.message,
            message:"Error in fetching data",
        })
    }
}