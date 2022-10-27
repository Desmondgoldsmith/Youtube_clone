import { Avatar } from '@mui/material'
import React from 'react'
import './video.css'

function Videos({image,title,channel,time,views,timeStamp,ch_image}) {
  return (
    <div className='Videos'>
      <img src={image} alt = "video" />
      <div className='video_content'>
        <Avatar className = "video_avatar"
         alt = {channel}
         src = {ch_image}
        >{channel}
        </Avatar>
        <div className='video_text'>
            <h4>{title}</h4>
            <p>{channel}</p>
            <p>{views} · {timeStamp}</p>
        </div>

      </div>
    </div>
  )
}

export default Videos