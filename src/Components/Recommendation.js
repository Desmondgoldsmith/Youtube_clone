import React from 'react'
import './recommendation.css'
import Videos from './Videos'

function Recommendation() {
  return (
    <div className='rec'>
     <h2>Recommendations</h2>
    <div className='video_recommendations'>
      <Videos />
        <Videos />
        <Videos />
        <Videos />
        <Videos />
        <Videos />
        <Videos />
    </div>
   
   
    </div>
  )
}

export default Recommendation