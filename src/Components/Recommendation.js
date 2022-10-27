import React from 'react'
import './recommendation.css'
import Videos from './Videos'
import { deepOrange, deepPurple } from '@mui/material/colors';


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
         <Videos 
          title = "Make money without coding ..... What you are Not being told !"
        views = "821k views"
        timeStamp = "7 months ago"
        image = "https://raw.githubusercontent.com/Desmondgoldsmith/Youtube_clone/main/public/vid%203.png"
        channel = "Dorian Develops"
        ch_image = ""
        />
        {/*<Videos 
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