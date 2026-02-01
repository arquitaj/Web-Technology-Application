import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
const router = express.Router();
// To make sure that it only accept request from localhost:5173
const corsOptions = {
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
}

app.use(express.json()); 
app.use(cors(corsOptions)); 

// 1. Ensure you have a User Model defined
const User = mongoose.model('User', new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true }
}));

// 1. ROUTE DEFINITION
app.get("/api", (req, res) => {
    console.log("Route /api was hit!"); // This will show in your terminal
    res.json({ fruits: ["apple", "orange", "banana"] });
});

app.post("/api/login", async(req, res) => {
    console.log("login route here!")
    console.log("Email:", req.body.email);
    console.log("Password:", req.body.password);
    const {email, password} = req.body; 
    try{
        const user = await User.findOne({email: email});    //Find user by email
        
        if(!user){
            return res.status(401).json({success: false, message: "User not found!"});
        }
        if(user.password===password){   // Check if password matches (Plain text for now, use bcrypt later!)
            return res.status(200).json({success: true, message: "Login sucessfully!"})
        }else{
            return res.status(401).json({success: false, message: "Wrong Password!"});
        }
    }catch(error){
        return res.status(401).json({success: false, message: "Invalid credentials!"});
    }
});

// 2. MOUNT THE ROUTER
// app.use("/api", router);

// 3. MONGODB (Moving this below routes so it doesn't block execution)
const ATLAS_URI = "mongodb://mongoDB:Password123@ac-wt5joxh-shard-00-00.nzcmkbs.mongodb.net:27017,ac-wt5joxh-shard-00-01.nzcmkbs.mongodb.net:27017,ac-wt5joxh-shard-00-02.nzcmkbs.mongodb.net:27017/?replicaSet=atlas-xwb1ec-shard-0&ssl=true&authSource=admin";

mongoose.connect(ATLAS_URI)
    .then(() => console.log("Connected to atlas"))
    .catch(err => console.error("MongoDB Error: ", err));


// 4. LISTEN
app.listen(8080, () => {
    console.log("Server is definitely running on port 8080");
    console.log("Try visiting: http://localhost:8080/api");
});