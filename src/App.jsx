import { useState } from 'react'
import Homepage from './Components/Homepage/Homepage'
import Index from './Components/Index'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Outlet/>
    </>
  )
}

export default App
