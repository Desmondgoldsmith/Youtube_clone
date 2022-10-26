import React from 'react'
import './sidebar.css'
import SidebarRow from './SidebarRow'
import HomeIcon from '@mui/icons-material/Home';


function Sidebar() {
  return (
    <div className='sidebar'>
        <SidebarRow icon={<HomeIcon/>} title = "Home"/>
        <SidebarRow title = "Trending"/>
        <SidebarRow title = "Subscription"/>
        
    </div>
  )
}

export default Sidebar