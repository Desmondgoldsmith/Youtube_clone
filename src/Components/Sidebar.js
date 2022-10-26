import React from 'react'
import './sidebar.css'
import SidebarRow from './SidebarRow'


function Sidebar() {
  return (
    <div className='sidebar'>
        <h1>Sidebar goes here</h1>
        <SidebarRow title = "Home"/>
        <SidebarRow title = "Trending"/>
        <SidebarRow title = "Subscription"/>
        
    </div>
  )
}

export default Sidebar