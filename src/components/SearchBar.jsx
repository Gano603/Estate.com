import { useState } from 'react'
import toast from 'react-hot-toast';
import {ImSearch} from 'react-icons/im'
import {BiErrorAlt} from 'react-icons/bi'
import { useNavigate } from 'react-router-dom';
import '../styles/SearchBar.scss'

const SearchBar = ({address , class_name}) => {

    const class_combine = `search-bar ${class_name}`;
    const [searchValue , setsearchValue] = useState("");
    const nav = useNavigate();
    
    const submitHandler = () => {
      if(!searchValue){
        toast(<span className='toast-notification'>
          <BiErrorAlt /> City Field Cannot be Empty
        </span>,{
          duration:4000,
          position:'top-right',
        })
        return;
      }
      const pascalCaseValue = searchValue
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join('');
  
    setsearchValue(pascalCaseValue);
        nav(`/display/${pascalCaseValue}`);
    }

  return (
    <div className={class_combine}>
      <input type="text" placeholder='Search by City' onKeyDown={(e)=>{if(e.key === 'Enter') submitHandler()}} value={address=== 'all'? '':address} onChange={(e)=> setsearchValue(e.target.value)}/>
      <ImSearch onClick={submitHandler}/>
    </div>
  )
}

export default SearchBar