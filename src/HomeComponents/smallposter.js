import React from 'react'
import './smallposter.css'
import { useEffect,useState ,useRef } from 'react'
import axios from 'axios'
import {Apikey, imageurl } from '../links'
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from 'react-router-dom';


function SmallPosters(props) {
const [hoverPosition, setHoverPosition] = useState('right');
const navigate = useNavigate()
const [notouch, setnotouch] = useState(true);
const [hoveredId, setHoveredId] = useState(null);
const [smallposterimage,setsmallposterimage] = useState([])
 const timer = useRef(null);
 const [Dataloaded,setDataloaded] = useState(false)

  const containerRef = useRef(null);
useEffect(
  ()=>
  {
   if(props.url)
   {
 axios.get(props.url).then(
      (responce)=>
      {
  
  setsmallposterimage(responce.data.results)
  setDataloaded(true)
  
      }
    ).catch(()=>{navigate('/404')})
   }
   else
   {
setsmallposterimage(props.Data)
 setDataloaded(true)
   }


  if (window.matchMedia("(pointer: coarse)").matches) {
  setnotouch(false)
}

  },[props.url, props.Data]
)

 const handleMouseEnter = (id,event) => {

const rect = event.currentTarget.getBoundingClientRect();
const windowWidth = window.innerWidth;

if (rect.left < windowWidth / 2) {
  // Element is in the left half of the screen — hover to the right
  setHoverPosition('right');
} else {
  // Element is in the right half of the screen — hover to the left
  setHoverPosition('left');
}
    timer.current = setTimeout(() => {
 
      setHoveredId(id); // Show hover after 1 second
    }, 650);
  };

  const handleMouseLeave = (id) => {
    clearTimeout(timer.current); // Cancel if leaving early
    setHoveredId(null);         // Hide hover immediately
  };

if(Dataloaded==false)
{
  return(null)
}
else
 {
   return (
    <div className={props.isNormal ? 'smallpostersnormal' : 'smallposters'}>
         <h3 className='Title'>{props.title}</h3>
  <div className='sidescrollwrapper'>
{   
props.ScrollButton && notouch &&
<button
          onClick={() => {
            if (containerRef.current) {
              containerRef.current.scrollLeft -= 1000;
            }
          }}
          className='sidescrollbutton'
        >
          ←
        </button>}
       


          
       <div className={props.wrapMode ? 'imagedivWrap': 'imagediv'}ref={containerRef}
       
       style={(props.ScrollButton && !notouch) ? { marginLeft:'3.5%'} : undefined}

       
       >


       {
 Array.isArray(smallposterimage) && smallposterimage.map(
    (data)=>

    {
    if(data.poster_path)
    {  
      return (
       <div className="image-container" key={data.id}>

        <div
        className='imgsectionandhover'
        key={data.id}
        onMouseEnter={(e)=>{handleMouseEnter(data.id,e)}}
        onMouseLeave={()=>{handleMouseLeave(null)}}
        
        >
               <LazyLoadImage src={imageurl + (props.vertical ? data.poster_path : data.backdrop_path)}
     className={props.vertical ? 'Verticalimage fade-in-image' :'Image fade-in-image' }
        alt="Image Alt"
          onLoad={(e) => e.target.classList.add('loaded')}
      />

{
  hoveredId === data.id && (
  <div className={`detailedhover ${hoverPosition === 'left' ? 'hover-left' : 'hover-right'}`} style={{backgroundImage:`url('${imageurl +data.backdrop_path}')`}} >

 
   <h1 className='TitleHover'> {data.title}</h1>
   <p className='descriptionHover'>{data.overview}</p>
   <p className='releasedateHover'>Release Date : {data.release_date}</p>
   <button className='HoverButton'
   
        onClick={ () => {
         navigate('/detailed', { state:{ Trending: data}});
         }}
   >  
                  <img className='DetailedButton' src="https://static.thenounproject.com/png/1815789-200.png" alt="" />
                  More Info</button>
  </div>
  )
}


             </div>

         

            </div>

      )}
      

    }
  )
       } 
     

        </div> 
{  props.ScrollButton &&   notouch && <button
  onClick={() => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 1000; // ✅ Corrected here
    }
  }}
  className='sidescrollbutton'
>
  →
</button>}
     </div>   
      
    </div>
  )
 }
}

export default SmallPosters
