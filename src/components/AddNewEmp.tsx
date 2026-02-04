import { useState, useEffect } from 'react'
import { X, Save, Search, Delete, Edit2Icon, FilePlus } from "lucide-react";
import "../assets/AddNewEmp.css";
import axios from 'axios';

const AddNewEmp = () => {
  // Create states for user inputs
  const [employeeID, setEmployeeID] = useState("")
  const [fname, setFname] = useState("");
  const [mname, setMname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handlebtnRegister= async () => {
    alert(role);
    try{
      const response = await axios.post("http://localhost:8080/home/addEmployee", {
        employeeID: employeeID,
        fname: fname,
        mname: mname,
        lname: lname,
        email: email,
        userName: userName, 
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
              <label>Employee ID <button><Search></Search></button></label>
              <input 
                type="text"
                autoComplete='off'
                value={employeeID}
                onChange={(e) => setEmployeeID(e.target.value)}/>
                
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
            <label>First Name</label>
            <input 
              type="text"
              autoComplete='off'
              value={fname}
              onChange={(e) => setFname(e.target.value)}/>
          </div>
        
          <div className="form-group">
            <label>Username</label>
            <input 
              type="text"
              autoComplete='off'
              value={userName}
              onChange={(e) => setUserName(e.target.value)}/>
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
              value={role}
              onChange={(e) => setRole(e.target.value)}>
              <option></option>  
              <option value="Employee">Employee</option>
              <option value="Admin">Admin</option>
            </select>
          </div>
        </div>

        <div className="actions">
          <button className="btn create" onClick={handlebtnRegister}>
            <FilePlus size={18} /> Create
          </button>
          <button className="btn edit">
            <Edit2Icon size={18} /> Edit
          </button>
          <button className="btn save">
            <Save size={18} /> Save
          </button>
          <button className="btn delete">
            <Delete size={18} /> Delete
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