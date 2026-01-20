import { useState } from 'react'
import './App.css'
import Alert from './components/Alert'


function App() {
  return (
    <>
      <div className='signUp'>
        <form className='loginForm'>
          <h1>Login</h1>
          <h2>Login to your account</h2>
          <div className='inputGroup'>
            <label htmlFor="email">E-mail Address</label>
            <input type='text' id='email' autoComplete='off'/>
            <label htmlFor="password">Password</label>
            <input type='password' id='password' autoComplete='off'/>
            <button type="button" className="btn btn-primary">Login</button>
          </div>
        </form>
        
      </div>
     
    </>
  )
}

export default App
