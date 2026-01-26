import React, { useState } from 'react'
import '../assets/Dashboard.css'
import '../assets/Components.css'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import DocumentsToggle from '../components/DocumentsToggle'
import AddDocumentNo from '../components/AddDocumentNo'

const Dashboard = () => {
  const [isDocOpen, setIsDocOpen] = useState(false);
  const toggleDocMenu = () =>{
    setIsDocOpen (!isDocOpen);
  };

  return (
    <div>
        <Navbar />
        <div className='m-1 side-Menu'>
          <Sidebar onIconClick={toggleDocMenu}/>
          <div className="dashboard-content">
            {isDocOpen ? ( 
              <DocumentsToggle />
            ) : (
              <div className='bg-body-tertiary m-2 main-Card min-height-center'></div>
            )}
          {/* <AddDocumentNo /> */}
          </div>
        </div>
    </div>
  )
}

export default Dashboard