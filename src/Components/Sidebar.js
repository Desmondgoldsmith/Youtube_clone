import React from 'react'
import './sidebar.css'
import SidebarRow from './SidebarRow'
import HomeIcon from '@mui/icons-material/Home';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
function Sidebar() {
  return (
    <div className='sidebar'>
        <SidebarRow selected Icon={<HomeIcon/>} title = "Home" className = "main" />
        <SidebarRow Icon={<VideoCameraBackIcon/>} title = "Shorts"/>
        <SidebarRow Icon = {<SubscriptionsIcon/>} title = "Subscription"/>
        <hr/>
        <SidebarRow selected Icon={<VideoLibraryIcon/>} title = "Library" className = "main" />
        <SidebarRow Icon={<HistoryIcon/>} title = "History"/>
        <SidebarRow Icon = {<OndemandVideoIcon/>} title = "Your video"/>
        <SidebarRow Icon = {<WatchLaterIcon/>} title = "Watch later"/>
        <SidebarRow Icon = {<ThumbUpIcon/>} title = "Liked videos"/>
        <SidebarRow Icon = {<ExpandMoreIcon/>} title = "Show more"/>
        <hr/>
    </div>
  )
}

export default Sidebar