import { useState, useEffect } from 'react'
import { X, Save } from "lucide-react";
import "../assets/AddNewEmp.css";
import axios from 'axios';

const AddNewEmp = () => {
  // Create states for user inputs
  // const [employeeID, setEmployeeID] = useState("")
  const [fname, setFname] = useState("");
  const [mname, setMname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  // const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handlebtnRegister= async () => {
    try{
      const response = await axios.post("http://localhost:8080/home/addEmployee", {
        employeeID: "000003",
        fname: fname,
        mname: mname,
        lname: lname,
        email: email,
        userName: "lr.lvllanto@mmdc.mcl.edu.ph", 
        password: password,
        role: role
      });
      if(response.data.success){
        alert("Successfully Added NeW Employee!")
      }
    }catch(error: any){
      // Axios throws an error for 401/500 status codes
      alert(error.response?.data?.message || "Failed to Add New Employee!");
    }

  }
  return (
    <div className="bg-body-tertiary m-2 main-Card min-height-center">
      <div className="add-emp">
        <h2 className="title">New Employee</h2>

        <div className="form-grid">
          <div className="form-group">
            <label>First Name</label>
            <input 
              type="text"
              autoComplete='off'
              value={fname}
              onChange={(e) => setFname(e.target.value)}/>
          </div>

          <div className="form-group">
            <label>Email</label>
            <input 
              type="email"
              autoComplete='off'
              value={email}
              onChange={(e) => setEmail(e.target.value)}/>
          </div>

          <div className="form-group">
            <label>Middle Name</label>
            <input 
              type="text"
              autoComplete='off'
              value={mname}
              onChange={(e) => setMname(e.target.value)}/>
          </div>

          <div className="form-group">
            <label>Temp Password</label>
            <input 
              type="password"
              autoComplete='off'
              value={password}
              onChange={(e) => setPassword(e.target.value)}/>
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input 
              type="text"
              autoComplete='off'
              value={lname}
              onChange={(e) => setLname(e.target.value)}/>
          </div>

          <div className="form-group">
            <label>Role</label>
            <select 
              defaultValue="Employee"
              value={role}
              onChange={(e) => setRole(e.target.value)}>
              <option value="Employee">Employee</option>
              <option value="Admin">Admin</option>
            </select>
          </div>
        </div>

        <div className="actions">
          <button className="btn save" onClick={handlebtnRegister}>
            <Save size={18} /> Save
          </button>
          <button className="btn cancel">
            <X size={18} /> Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNewEmp;