import React from 'react'
import './recommendation.css'
import Videos from './Videos'

function Recommendation() {
  return (
    <div className='rec'>
     <h2>Recommendations</h2>
    <div className='video_recommendations'>
       <Videos 
        title = "Russian mercenaries build massive anti-tank defence"
        views = "1.8 million"
        timeStamp = "4 days ago"
        image = "https://raw.githubusercontent.com/Desmondgoldsmith/Youtube_clone/main/public/vid1.png"
        channel = "CNN"
        ch_image = ""
       />
        {/* <Videos 
          title = "How Russia's ‘kamikaze’ drones are changing the Ukraine war -....."
        views = ""
        timeStamp = ""
        image = ""
        channel = ""
        ch_image = ""
        />
        <Videos 
          title = "How Russia's ‘kamikaze’ drones are changing the Ukraine war -....."
        views = ""
        timeStamp = ""
        image = ""
        channel = ""
        ch_image = ""
        />
        <Videos title = "How Russia's ‘kamikaze’ drones are changing the Ukraine war -....."
        views = ""
        timeStamp = ""
        image = ""
        channel = ""
        ch_image = "" 

        /> */}
        {/* <Videos title = "How Russia's ‘kamikaze’ drones are changing the Ukraine war -....."
        views = ""
        timeStamp = ""
        image = ""
        channel = ""
        ch_image = ""

        />
        <Videos  title = "How Russia's ‘kamikaze’ drones are changing the Ukraine war -....."
        views = ""
        timeStamp = ""
        image = ""
        channel = ""
        ch_image = ""

        />
        <Videos 
          title = "How Russia's ‘kamikaze’ drones are changing the Ukraine war -....."
        views = ""
        timeStamp = ""
        image = ""
        channel = ""
        ch_image = ""
        /> */}
    </div>
   
   
    </div>
  )
}

export default Recommendation