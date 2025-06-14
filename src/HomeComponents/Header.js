import React from 'react'
import './Home.css'
import Search from '../Search/Search'
import Logo from '../Assets/Logo.png'
function Header() {
  return (
    <div className='Header'>
   
     <img className='Logo' src={Logo}/>
 
    <div className='Searchdiv'>
<Search/>

    </div>
 
    </div>
    
  )
}

export default Header
