import React from 'react';
import './sideRow.css'

function SidebarRow({Icon,title}) {
  return (
   <div className='side_row'>
     <h3>{Icon}</h3>
     <h3>{title}</h3>
   </div>
  )
}

export default SidebarRow