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
function Sidebar() {
  return (
    <div className={'sidebar'}>
        <SidebarRow selected Icon={<HomeIcon/>} title = "Home" className = "main" />
        <SidebarRow Icon={<VideoCameraBackIcon/>} title = "Shorts"/>
        <SidebarRow Icon = {<SubscriptionsIcon/>} title = "Subscription"/>
        <hr/>
        <SidebarRow selected Icon={<VideoLibraryIcon/>} title = "Home" className = "main" />
        <SidebarRow Icon={<HistoryIcon/>} title = "Shorts"/>
        <SidebarRow Icon = {<OndemandVideoIcon/>} title = "Subscription"/>
        <SidebarRow Icon = {<WatchLaterIcon/>} title = "Subscription"/>
        <SidebarRow Icon = {<SubscriptionsIcon/>} title = "Subscription"/>
        <SidebarRow Icon = {<SubscriptionsIcon/>} title = "Subscription"/>
        <hr/>
    </div>
  )
}

export default Sidebar