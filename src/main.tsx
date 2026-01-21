import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import App from './App.tsx'
import Dashboard from './pages/Dashboard.tsx'
import NotFoundPage from './pages/NotFoundPage.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
  {path:"/",element:<App />},
  {path:"/dashboard", element:<Dashboard />},
  {path:"*", element:<NotFoundPage />}
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
