import React from 'react'
import './Error.css'
import { useNavigate } from 'react-router-dom'
function Error() {
  const navigate=useNavigate()
  return (
    <div className='full-height '>
      <h1>404</h1>
      <button className='Refreshbutton' onClick={()=>{navigate('/')}}>Refresh</button>
    </div>
  )
}

export default Error


