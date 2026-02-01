import React from "react";
import { X, Save } from "lucide-react";
import "../assets/AddNewEmp.css";

const AddNewEmp = () => {
  return (
    <div className="bg-body-tertiary m-2 main-Card min-height-center">
      <div className="add-emp">
        <h2 className="title">New Employee</h2>

        <div className="form-grid">
          <div className="form-group">
            <label>First Name</label>
            <input type="text"/>
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email"/>
          </div>

          <div className="form-group">
            <label>Middle Name</label>
            <input type="text"/>
          </div>

          <div className="form-group">
            <label>Temp Password</label>
            <input type="password"/>
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input type="text"/>
          </div>

          <div className="form-group">
            <label>Role</label>
            <select defaultValue="Employee">
              <option>Employee</option>
              <option>Admin</option>
              <option>Manager</option>
            </select>
          </div>
        </div>

        <div className="actions">
          <button className="btn save">
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
