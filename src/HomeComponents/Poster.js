import React, { useEffect,useState  } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { TrendingUrl,imageurl } from '../links'
import SmallPosters from './smallposter'
import { orginal,Baseurl,netflixorginal } from '../links'
import DetailedPage from '../DetailedPage/DetailedPage'
function Poster() {
const navigate = useNavigate()
const[Trending,setTrending] =useState([])
const [isloading,setIsLoading]=useState(true)
  useEffect(

()=>
{
    axios.get(TrendingUrl).then(
        (responcedata)=>
        {
          const randomIndex = Math.floor(Math.random() * responcedata.data.results.length);
           const selected = responcedata.data.results[randomIndex];

           // Preload image
        const img = new Image();
        img.src = imageurl + selected.backdrop_path;
        img.onload = () => {
          setTrending(selected);
          setIsLoading(false);
        };
        }
    ).catch(()=>{navigate('/404')})
},[]

  )
  


    return (

        <div className={isloading ? 'Posterdiv loadingblur' : 'Posterdiv loadingblur imageloaded'} style={{ backgroundImage: `url(${imageurl + Trending?.backdrop_path})` }}>
          
              {/* isloading ? 
              <div className='loadingdiv'>
                 <div className='Loader'>

                  
                 </div>
              </div>
              
            : */}

              <div className='Fade'></div>
            <div className="PosterTexts">
                <h1 className='title'>{Trending.title}</h1>
                <h4 className="hashtag">#Trending</h4>
                <p className="Description">{Trending.overview}</p>
                <button className='PosterButton'
                onClick={ () => {
         navigate('/detailed', { state:{Trending}});
         }
        }>  
                  <img className='moreinfoicon' src="https://static.thenounproject.com/png/1815789-200.png" alt="" />
                  More Info</button>
                  
            </div>

        </div>

    )
}

export default Poster
