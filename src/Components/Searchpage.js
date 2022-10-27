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
     <h4>Latest Posts from Desmond Goldsmith</h4>
     <div className='posts'>
       <Posts 
        title = "Russian mercenaries build massive anti-tank defence"
        keyword = "#POST"
        views = "20M Views"
        timeStamp = "2 hours ago"
        image = "https://avatars.githubusercontent.com/u/62439177?s=400&u=4704bfad486fcb109ed0792b728093bdc647372c&v=4"
        name = "Desmond Goldsmith"
        tag = "New"
        mainPic = "https://raw.githubusercontent.com/Desmondgoldsmith/Youtube_clone/main/public/vid1.png"
       />
     </div>
    </div>
  )
}

export default Searchpage