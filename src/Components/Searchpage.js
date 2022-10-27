import React from 'react'
import './searchpage.css'
import TuneIcon from '@mui/icons-material/Tune';
import Posts from './Posts';

function Searchpage() {
  return (
    <div className = "searchpage">
     <div className='filter'>
      <TuneIcon  className='filter_icon'/>
      <p>Filters</p>
     </div>  

     <hr/>

     <div className='profile_details'>
       <div className='profile_pic'>
       <img src='https://avatars.githubusercontent.com/u/62439177?s=400&u=4704bfad486fcb109ed0792b728093bdc647372c&v=4' alt='profile'/>
       </div>
        <div className='details'>
            <h2>Desmond Goldsmith</h2>
            <p>50k subscribers ⋅ 200 Videos </p>
            <p>Official Youtube Account</p>
        </div>
        <div className='subscribe'>
            <button>subscribe</button>
        </div>

     </div>
     <hr/>
     <div className='posts'>
       <Posts />
     </div>
    </div>
  )
}

export default Searchpage