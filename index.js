import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { type } from 'node:os';
import axios from 'axios';

const app = express();
const router = express.Router();
// To make sure that it only accept request from localhost:5173
const corsOptions = {
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
}

app.use(express.json()); 
app.use(cors(corsOptions)); 

// 3. MONGODB (Moving this below routes so it doesn't block execution)
//  const ATLAS_URI = "mongodb+srv://mongoDB:Password123@cluster0.nzcmkbs.mongodb.net/mydb?retryWrites=true&w=majority";
const ATLAS_URI = "mongodb://mongoDB:Password123@ac-wt5joxh-shard-00-00.nzcmkbs.mongodb.net:27017,ac-wt5joxh-shard-00-01.nzcmkbs.mongodb.net:27017,ac-wt5joxh-shard-00-02.nzcmkbs.mongodb.net:27017/AIMS_db?replicaSet=atlas-xwb1ec-shard-0&ssl=true&authSource=admin";

mongoose.connect(ATLAS_URI)
    .then(() => console.log("Connected to atlas"))
    .catch(err => console.error("MongoDB Error: ", err));

// 1. Ensure you have a User Model defined
const User = mongoose.model('User', new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true }
},{collection:"employeelists"}));

// 1. ROUTE DEFINITION
app.get("/api", (req, res) => {
    console.log("Route /api was hit!"); // This will show in your terminal
    res.json({ fruits: ["apple", "orange", "banana"] });
});

app.post("/api/login", async(req, res) => {
    const {username, password} = req.body; 
    console.log("username:", username);
    console.log("Password:", password);
    try{
        const user = await User.findOne({username:username});    //Find user by email
        console.log("User", user)
        if(!user){
            return res.status(401).json({success: false, message: "User not found!"});
        }
        if(user.password===password){   // Check if password matches (Plain text for now, use bcrypt later!)
            console.log(user);
            return res.status(200).json({success: true, message: user})
        }else{
            return res.status(401).json({success: false, message: "Wrong Password!"});
        }
    }catch(error){
        return res.status(401).json({success: false, message: "Invalid credentials!"});
    }
});

// ***********Fetch All Employees********************************************
app.get('/home/employees', async(req, res) => {
    const users = await User.find();
    console.log("users", users);
    return res.status(200).json({
      success: true,
      message: "Employees fetched successfully",
      users
    });

})


//************Adding of New Employe********************************************
const employeeList = mongoose.model("employeelists", new mongoose.Schema({
        employeeID: {type: String, require: true},
        firstName: { type: String, required: true },
        middleName: {type: String, required: false},
        lastName: {type: String, required: true},
        email: {type: String, requeired: false},
        username: {type: String, required: true},
        password: {type: String, required: true},
        role: {type: String, required: true},
    },{collection: "employeelists"}));


// **********Delete Employee*************************************************
app.delete("/home/deleteEmployee", async(req, res) => {
    console.log("Im in sa delete");
    const {employeeID} = req.body;
    try{
        const deleted = await User.findOneAndDelete({employeeID:employeeID});
        if (!deleted) {
            return res.status(404).json({ success: false, message: "Employee not found" });
        }
            return res.status(200).json({ success: true, message: "Employee deleted!" });
        } catch (err) {
            return res.status(500).json({ success: false, message: err.message });
        }
});
//***********Update Employee *************************************************
app.put("/home/updateEmployee", async(req, res) => {
    const {employeeID,fname, mname, lname, email, userName, password, role} = req.body;
    const filter = {employeeID: employeeID};
    const update = {
        firstName : fname,
        middleName : mname,
        lastName : lname,
        email : email,
        username : userName,
        password : password,
        role: role
    };
    try{
        const employee = await employeeList.findOneAndUpdate(filter, update,{
            new: true,
            unValidators: true // to ensure schema validation
        });
        if(!employee){
            return res.status(404).json({success: false, message: "Employee not found!"});
        }else{
            return res.status(200).json({success: true,message: "Successfully updated employee!"});
        }
    }catch(error){
        return res.status(401).json({success: false, message: "Failed to Update Employee!"});
    }
});

app.post('/home/addEmployee', async(req, res) => {
    const {employeeID, fname, mname, lname, email, userName, password, role} = req.body;
    try{
        console.log(employeeID)
        if(role === ""){
            return res.status(400).json({success: false, message: "No role of employee selected!"});
            }else{
            const employee = await employeeList.findOne({employeeID: employeeID});
            if(!employee){
                const existingEmail = await employeeList.findOne({email:email});
                console.log(existingEmail);
                if(!existingEmail){
                   const newEmployee = new employeeList({
                    employeeID : employeeID,
                    firstName : fname,
                    middleName : mname,
                    lastName : lname,
                    email : email,
                    username : userName,
                    password : password,
                    role: role
                   });
                   await newEmployee.save();
                   const users = await User.find();
                   res.status(200).json({success: true, message: "Sucessfully Added NeW Employee!", users: users});
                }else{
                    res.status(401).json({success: false, message: "Email already exist!"});
                }
            }else{
                res.status(401).json({success: false, message: "Employee ID already exist!"});
            }
        }  
    }catch(error){
        return res.status(400).json({success: false, message: "Please complete the form!"});
    }
})

//*******Upload Document**************
const uploadDocument = mongoose.model("documentlists", new mongoose.Schema({
    documentNo: {type: String, required: true},
    issuanceType: {type: String, required: true},
    series: {type: Number, required: true},
    date: {type: Date, required: true},
    subject: {type: String, required: false},
    keyWord: {type:String, required: false}
}, {collection:"documentlists"}));

app.post('/home/uploadDocument', async(req, res) => {
    console.log("I'm in");
    const {documentNo, issuanceType, series, date, subject, keyWord} = req.body;
    try{
        const document = await uploadDocument.findOne({documentNo:documentNo});
        if(!document){
            const newDocument = new uploadDocument({
                documentNo: documentNo,
                issuanceType: issuanceType,
                series: series,
                date: date,
                subject: subject,
                keyword: keyWord
            });
            await newDocument.save();
            res.status(200).json({success: true, message: "Successfully Added New Document!"})
        }else{
            res.status(401).json({success: false, message: "Document Number already exist!"})
        }
    }catch(error){
        return res.status(400).json({success: false, message: "Invalid Post Request!"});
    }
})

// *******Generate Document*********

// const document = mongoose.model("documentlists", new mongoose.Schema({

// }))

// app.post('/home/uploadDocument', async(req, res) => {
//     console.log('hi');
// });

// 4. LISTEN
app.listen(8080, () => {
    console.log("Server is definitely running on port 8080");
    console.log("Try visiting: http://localhost:8080/api");
});