import React from 'react'
import '../assets/Components.css'

interface SidebarProps {
  onIconClick: () => void;
}
const Sidebar = ({ onIconClick }: SidebarProps) => {
  
  return (
    <div>
        <div className="side-Bar min-height bg-body-tertiary my-2">
            <div>
                <img src="/doc.png" className="sidebar-Icons mx-5 mt-5" alt='User' onClick={onIconClick} style={{cursor: 'pointer'}} />
                <img src="/add-user.png" className="sidebar-Icons mx-5 mt-5" alt='User' onClick={onIconClick} style={{cursor: 'pointer'}} />
            </div>
            
        </div>
        
        
    </div>
  )
}

export default Sidebar
