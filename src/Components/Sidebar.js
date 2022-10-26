import React from 'react'
import './sidebar.css'
import SidebarRow from './SidebarRow'
import HomeIcon from '@mui/icons-material/Home';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
function Sidebar() {
  return (
    <div className='sidebar'>
        <SidebarRow icon={<HomeIcon/>} title = "Home"/>
        <SidebarRow icon={<VideoCameraBackIcon/>} title = "Trending"/>
        <SidebarRow icon = {<SubscriptionsIcon/>} title = "Subscription"/>
        
    </div>
  )
}

export default Sidebar