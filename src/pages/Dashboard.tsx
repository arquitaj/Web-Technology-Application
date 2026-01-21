import React from 'react'
import '../assets/Dashboard.css'

const Dashboard = () => {
  return (
    <div>
        <nav className="navbar bg-body-tertiary position-sticky">
        <div className="container-fluid justify-content-end px-5 py-3">
            <img src="/user.png" className="icons mx-3" alt='User'/>
            <h3>John Paul Arquita</h3>
            <img src='/arrow-down.png' className='icons mx-3' />
        </div>
        </nav>
        <div className="left-Menu-Icons bg-body-tertiary my-2">
            <img src="/doc.png" className="menu-Icons" alt='User'/>
        </div>
        <div className="left-Menu bg-body-tertiary my-2">
            <img src="/doc.png" className="menu-Icons" alt='User'/>
        </div>
        <div className='dashboard-Main'>
            <div className='d-flex justify-content-evenly'>
                <button type="button" className="btn btn-primary">Document No.</button>
                <button type="button" className="btn btn-primary">Upload Document</button>
                <button type="button" className="btn btn-primary">Search Document</button>
                <button type="button" className="btn btn-primary">Incoming Document</button>
            </div>
        </div>
        
    </div>
  )
}

export default Dashboard
