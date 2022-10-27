import React from 'react'
import './posts.css'

function Posts({title,keyword,views,timeStamp,image,name,tag,mainPic}) {
  return (
    <div className='posts'>
      <div className='image'>
        <img src={mainPic} alt = {title}/>
      </div>
      <div className='content'>
       <h2>{title}</h2>
       <h3>{keyword}</h3>
       <p>{views}⋅{timeStamp}</p>
       <p><img src={image}/>{name}</p>
       <span className = "tag">{tag}</span>
</div>   
 </div>
  )
}

export default Posts