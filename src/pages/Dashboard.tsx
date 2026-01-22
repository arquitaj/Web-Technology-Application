import React from 'react'
import '../assets/Dashboard.css'
import '../assets/Components.css'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import DocumentsToggle from '../components/DocumentsToggle'
import AddDocumentNo from '../components/AddDocumentNo'

const Dashboard = () => {
  
  return (
    <div>
        <Navbar />
        <div className='m-1 side-Menu'>
          <Sidebar />
          <DocumentsToggle />
          <AddDocumentNo />
        </div>
    </div>
  )
}

export default Dashboard
