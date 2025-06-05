import React from 'react'
import './Error.css'
import { useNavigate } from 'react-router-dom'
import Errorimg from '../Assets/Errorimg.png'
function Error() {
  const navigate=useNavigate()
  return (
    <div className='full-height '>
     <p className='errorparagaraph'>You’re offline. Please check your connection and try again.</p>
<div className='errorbox'>     <p className='errorparagaraphjio'>It seems there’s an issue with your internet connection, and some providers like Jio may not support access to our website. 
      Please try switching to a different network or internet provider and try again.</p></div>
      <button className='Refreshbutton' onClick={()=>{navigate('/')}}>Refresh</button>
      <img className='errorimage' src= { Errorimg }alt="" />
      

    </div>
  )
}

export default Error


