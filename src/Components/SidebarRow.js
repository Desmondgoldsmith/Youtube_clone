import React from 'react';
import './sidebar.css'

function SidebarRow({selected,Icon,title}) {
  return (
   <div className='side_row'>
     <h3 className={`side_icon ${selected && "selected"}`}>{Icon}</h3>
     <h3 className='side_text'>{title}</h3>
   </div>
  )
}

export default SidebarRow