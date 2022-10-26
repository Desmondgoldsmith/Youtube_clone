import React from 'react'
import './sidebar.css'
import SidebarRow from './SidebarRow'
import HomeIcon from '@mui/icons-material/Home';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
function Sidebar() {
  return (
    <div className={'sidebar'}>
        <SidebarRow selected Icon={<HomeIcon/>} title = "Home" className = "main" />
        <SidebarRow Icon={<VideoCameraBackIcon/>} title = "Shorts"/>
        <SidebarRow Icon = {<SubscriptionsIcon/>} title = "Subscription"/>
        
    </div>
  )
}

export default Sidebar