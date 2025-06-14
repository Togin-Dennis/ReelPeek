import React, { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Search.css'
import { imageurl, SearchUrl } from '../links';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Search() {
  const [SearchClickked, setSearchClickked] = useState(false)
  const [InputValue, setInputValue] = useState(null)


  const navigate = useNavigate()

  const timer = useRef(null);
  const handleMouseleave = () => {
    timer.current = setTimeout(() => {
      setSearchClickked(false);
    }, 120000);
  };

  const Search = () => {
    InputValue &&
      axios.get(SearchUrl + InputValue).then(
        (responce) => {
          const result = responce.data.results
         

            navigate('/Search', { state: { SearchedData: result } });
        }
      ).catch(()=>{navigate('/404')})
  }


  return (
    <div onMouseLeave={() => { handleMouseleave() }} className='SearchMainDiv'>

      {
        SearchClickked ?
          <div

            className='InputDiv'>
            <FontAwesomeIcon className='SearchIconinideinput' icon={faSearch} />
            <input className='SearchInputBox' type='text' onChange={(e) => { setInputValue(e.target.value) }}
              placeholder='Titles, Characters, Genres'

            ></input>

            <button className='SearchButton'
            
            onClick={() => { Search() }}>search</button>

          </div>

          :

          <FontAwesomeIcon className='SearchIcon' icon={faSearch}
            onClick={() => { setSearchClickked(true) }}
          />

      }



    </div>
  )
}

export default Search
