import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar bg-body-tertiary position-sticky">
            <div className="container-fluid justify-content-end px-5 py-3 dropdown-center">
              <img src="/user.png" className="profile-Icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" role="button" alt="Menu" />
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <a className="dropdown-item" href="#">Logout</a>
                </li>
              </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
