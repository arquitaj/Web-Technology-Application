import { useState, useEffect } from 'react'
import './assets/App.css'
import Alert from './components/Alert'
import Dashboard from './pages/Dashboard'
import { createBrowserRouter, useNavigate } from 'react-router-dom'
import axios from 'axios';

function App() {
  const navigate = useNavigate();
  const [array, setArray] = useState([]);
  // Create states for the inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const fetchApi = async () => {
    const response = await axios.get("http://localhost:8080/api");
    setArray(response.data.fruits);
    console.log(response.data.fruits);
  }
  useEffect(() => {
    fetchApi();
  },[]);

  const handleLogin = async () =>{
    try{
      const response = await axios.post("http://localhost:8080/api/login", {
        email: email,
        password: password
      });
      if(response.data.success){
        alert("Login Successfully!");
        navigate("/Dashboard");
      }
    }catch(error: any){
      // Axios throws an error for 401/500 status codes
      alert(error.response?.data?.message || "Login failed");
    }
  }

  return (
    <>
    
      <div className='signUp'>
        <form className='loginForm'>
          
      {
        array.map((fruit, index) => (
          <div key={index}>
            <p>{fruit}</p>
          </div>
        ))
      }
          <h1>Login</h1>
          <h2>Login to your account</h2>
          <div className='inputGroup'>
            <label htmlFor="email">E-mail Address</label>
            <input 
              type='text' 
              id='email' 
              autoComplete='off'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />

            <label htmlFor="password">Password</label>
            <input 
              type='password' 
              id='password' 
              autoComplete='off'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />
            <button type="button" className="btn btn-primary" onClick={handleLogin}>Login</button>
          </div>
        </form>
        
      </div>
     
    </>
  )
}

export default App
