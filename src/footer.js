import React from 'react'
import './footer.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram,faXTwitter,faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';
function Footer() {
  return (
    <div className='maindiv'>
    <div className='footerdiv'>
      <button className='socialbutton'>
       <FontAwesomeIcon icon={faInstagram} className="Social" />
      </button>
       <button className='socialbutton'>
       <FontAwesomeIcon icon={faXTwitter} className="Social" />
      </button>
       <button className='socialbutton'>
       <FontAwesomeIcon icon={faYoutube} className="Social" />
      </button>
       <button className='socialbutton'>
       <FontAwesomeIcon icon={faEnvelope} className="Social" />
      </button>
       <button className='socialbutton'>
       <FontAwesomeIcon icon={faGlobe} className="Social" />
      </button>
            

    </div>
 <p className='copyright'>© Togin Dennis</p>

 <div className='Textbuttondiv'>
      <button className='Textbutton'>
       <p>Privacy Policy</p>
      </button>
   
  <button className='Textbutton'>
       <p>Terms to Use</p>
      </button>
  <button className='Textbutton'>
       <p>Contact us</p>
      </button>
<button className='Textbutton'>
       <p>CopyRight</p>
      </button>
</div>


    </div>
  )
}

export default Footer
