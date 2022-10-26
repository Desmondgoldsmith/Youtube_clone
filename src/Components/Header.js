import React from 'react'
import './header.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AppsIcon from '@mui/icons-material/Apps';
function Header() {
  return (
    <div className = 'header'>
     <div className='logo'>
     <MenuIcon />
     <img src = "./youtube-logo-removebg-preview.png" alt='youtube logo'/>
     </div>

     <div className="all">
        <SearchIcon className = ''/>
                <input type="text" placeholder='Search'/>
         <SearchIcon className = 'searchButton'/>
</div>
        <MicIcon className='mic'/>

    {/* icons left section */}
        <div className="left_section">
            <AppsIcon className='left_side_icon' />
            <VideoCallIcon className='left_side_icon'/>
            <NotificationsIcon className='left_side_icon'/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Circle-icons-profile.svg" alt = 'user image' className='user_image'></img>

        </div>          
          {/* <h1>Hello this is the header</h1> */}
        </div>
   
  )
}

export default Header