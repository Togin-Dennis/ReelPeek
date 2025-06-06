import React,{useEffect,useState} from 'react'
import Header from '../HomeComponents/Header'
import { useLocation,useNavigate } from 'react-router-dom';
import SmallPosters from '../HomeComponents/smallposter';
import './SearchShow.css'
import Footer from '../footer';
function Searchshow() {
const navigate=useNavigate()
    const location = useLocation();

const [SearchedDatas, setSearchedDatas] = useState([]);

  useEffect(() => {
    
    if (location.state?.SearchedData) {
      setSearchedDatas(location.state.SearchedData);
    }
  }, [location.state]);
  return (
<div className='Showmaindiv'>
  <Header /> 
       <div className='backButtonDiv'>
    <button className='BackButton'  onClick={()=>{navigate('/')}}>Back To Home</button>
    </div>  
  <div className='Showresult'>  
 
   <SmallPosters title={`Searched Results : ${SearchedDatas.length} `} url='' Data={SearchedDatas} isNormal={true} vertical={true}
   
    wrapMode={true} ScrollButton={false}
   />

  </div>

</div>

  )
}

export default Searchshow
