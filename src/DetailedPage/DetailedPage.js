import React, { useEffect, useState } from 'react'
import { useLocation,useNavigate } from 'react-router-dom';
import { imageurl } from '../links';
import './DetailedPage.css'
import { useMediaQuery } from 'react-responsive';
import Footer from '../footer';
import axios from 'axios';
import { Apikey } from '../links';
import YouTube from 'react-youtube';
import Header from '../HomeComponents/Header';
function DetailedPage() {
  const navigate=useNavigate()
const [trailerkey,settrailerkey] =useState(null)
useEffect(
  ()=>
  {
    axios.get(`https://api.themoviedb.org/3/movie/${Trending.id}/videos?api_key=${Apikey}`).then(
      (responce)=>
      {
       const key = responce.data?.results?.[0]?.key || '5027nbcmFFk';
      settrailerkey(key);
    }).catch(()=>{navigate('/404')})

    
    
      window.scrollTo({ top: 0, behavior: 'smooth' });
  },[]

)

const isMobile = useMediaQuery({ maxWidth: 600 });
const location = useLocation();
const Trending = location.state?.Trending;

const Imagelink =  isMobile ? imageurl + Trending?.poster_path   : imageurl + Trending?.backdrop_path

  return (
    <>
    <div className={isMobile ?'MobileBackgroundimagediv' :'Backgroundimagediv'} style={{ backgroundImage: `url(${Imagelink})` }}>

   <Header/>
        <div className='GradiantFade'>
       
<div className='DetailedTexts'>

      <h1 className='DetailedTitle'>{Trending.title} </h1>
      <h4 className="Detailedhashtag">#Trending</h4>
      <h4 className="DetailedReleaseDate">Release Date : {Trending.release_date}</h4>
      <p className="DetailedDescription">{Trending.overview}</p>
      
  </div>

 <div className='backButtonDiv'>
    <button className='BackButton'  onClick={()=>{navigate('/')}}>Back To Home</button>
    </div>

 {!isMobile && (
      <div className='Youtubeframe'>
        <YouTube videoId={trailerkey} opts={{ playerVars: { autoplay: 1 } }} />
      </div>
    )}
   

     </div>
    </div>

{isMobile && (
  <div className='Mobileframe'>
    <YouTube videoId={trailerkey} opts={{ playerVars: { autoplay: 0 } }} />
  </div>
)}


  
    </>
  )
}

export default DetailedPage
