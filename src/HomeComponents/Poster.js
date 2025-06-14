import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { TrendingUrl, imageurl } from '../links'
import SmallPosters from './smallposter'
import { orginal, Baseurl, netflixorginal } from '../links'
import DetailedPage from '../DetailedPage/DetailedPage'
function Poster() {
  const navigate = useNavigate()
  const [Trending, setTrending] = useState([])
  const [isloading, setIsLoading] = useState(true)
  const [Dataloaded, setDataloaded] = useState(false)
    const [imageloaded, setimageloaded] = useState(false)
  useEffect(

    () => {
      axios.get(TrendingUrl).then(
        (responcedata) => {
          const randomIndex = Math.floor(Math.random() * responcedata.data.results.length);
          const selected = responcedata.data.results[randomIndex];
         
          // Preload image
          const img = new Image();
          img.src = imageurl + selected.backdrop_path;
          img.onload = () => {
            setimageloaded(true)
            setTrending(selected);
             setTimeout(() =>setDataloaded(true), 550); // SHORT DELAY to trigger transition
             setTimeout(() =>setIsLoading(false), 500); // SHORT DELAY to trigger transition
          };
        }
      ).catch(() => { navigate('/404') })
    }, []

  )

 
    return (

Dataloaded==false ? 
 <div className='Posterdiv'>

      <div className={!imageloaded ?'loadingdiv' :'loadingdiv Firstblur'}>
        <div className='Loader'>          
        </div>
          <div className='errorbox'>     <p className='errorparagaraphjio'>

 If the site loads slowly, it might be due to a weak internet connection or because some network providers like Jio may not be able to access the site properly. Try switching to a different network and reload the page.
            </p></div>
      </div>
      </div>
:
<>      <div className={isloading ? 'Posterdiv ' : 'Posterdiv loadingblur '} style={{ backgroundImage: `url(${imageurl + Trending?.backdrop_path})` }}>


    
        <div className='Fade'></div>
        <div className="PosterTexts">
          <h1 className='title'>{Trending.title}</h1>
          <h4 className="hashtag">#Trending</h4>
          <p className="Description">{Trending.overview}</p>
          <button className='PosterButton'
            onClick={() => {
              navigate('/detailed', { state: { Trending } });
            }
            }>
            <img className='moreinfoicon' src="https://static.thenounproject.com/png/1815789-200.png" alt="" />
            More Info</button>

        </div>

      
     </div></>
)}

    
  



export default Poster
