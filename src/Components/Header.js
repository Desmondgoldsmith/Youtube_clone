import React, { useState } from 'react'
import './header.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
// import MicIcon from '@mui/icons-material/Mic';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AppsIcon from '@mui/icons-material/Apps';
import { Link } from 'react-router-dom';
function Header() {
  const [search,setSearch] = useState("");
  return (
    <div className = 'header'>
     <div className='logo'>
     <MenuIcon />
     <Link to="/">
           <img className='yt_logo' src = "https://raw.githubusercontent.com/Desmondgoldsmith/Youtube_clone/main/public/youtube-logo-removebg-preview.png" alt='youtube logo'/>
     </Link>
     </div>

     <div className="all">
        <SearchIcon className = 'extra_search'/>
                <input type="text" onChange={e=>setSearch(e.target.value)} value={search} placeholder='Search'/>
         <Link to={`/search/${search}`}>
              <SearchIcon className = 'searchButton'/>
          </Link>
</div>
     
    {/* icons left section */}
        <div className="left_section">
            <AppsIcon className='left_side_icon' />
            <VideoCallIcon className='left_side_icon'/>
            <NotificationsIcon className='left_side_icon'/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Circle-icons-profile.svg" alt = 'user' className='user_image'></img>

        </div>          
          {/* <h1>Hello this is the header</h1> */}
        </div>
   
  )
}

export default Header