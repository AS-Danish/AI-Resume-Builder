import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './Components/Homepage/Homepage.jsx'
import Index from './Components/Index/index.jsx'

const router = createBrowserRouter([
  {
    path: '',
    element: <Homepage/>
  },
  {
    path: 'create-resume',
    element: <Index/>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
