import React from 'react'
import './recommendation.css'
import Videos from './Videos'
import { deepOrange, deepPurple } from '@mui/material/colors';
import "~slick-carousel/slick/slick.css"; 
import "~slick-carousel/slick/slick-theme.css";



const handleAfterChange = (e) => {
  console.log(e.index);
  console.log(e.dir);
};

function Recommendation() {
  return (
    <div className='rec'>
     <h2>Recommendations</h2>
     {/* <Carouselitem/> */}
     <Carousel className={ Style.container } isInfinite isRTL itemsToShow={ 2 } onAfterChange={ handleAfterChange }>
        <SwipeSlider className={ Style.slider } disableSwipe hasKeysNavigation>
            <div className={ Style.customItem }>Item 1</div>
            <div className={ Style.moreCustomItem }>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
            <div>Item 5</div>
        </SwipeSlider>
    </Carousel>
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
        <Videos 
          title = "Gravitas: Inside China's Police Stations Oversees.."
        views = "43k views"
        timeStamp = "6 hours ago"
        image = "https://raw.githubusercontent.com/Desmondgoldsmith/Youtube_clone/main/public/vid2.png"
        channel = "WION"
        ch_image = ""
        />
        <Videos title = "Evil effects of watching p*rn explained by SADHGURU & ...."
        views = "1.8M views"
        timeStamp = "5 months ago"
        image = "https://raw.githubusercontent.com/Desmondgoldsmith/Youtube_clone/main/public/vid4.png"
        channel = "BeWithSADHGURU"
        ch_image = "" 

        /> 
         <Videos title = "The best AWS project to get you hired !"
        views = "35k views"
        timeStamp = "5 days ago"
        image = "https://raw.githubusercontent.com/Desmondgoldsmith/Youtube_clone/main/public/vid5.png"
        channel = "Tech with Lucy"
        ch_image = ""

        />
        <Videos  title = "NSMQ2022 WINNERS: CONGRATULATIONS...."
        views = "730 views"
        timeStamp = "6 hours ago"
        image = "https://raw.githubusercontent.com/Desmondgoldsmith/Youtube_clone/main/public/vid6.png"
        channel = "Monkey Desert"
        ch_image = ""

        />
        <Videos 
          title = "I asked MICROSOFT employees how much they MAKE..."
        views = "278k views"
        timeStamp = "1 month ago"
        image = "https://raw.githubusercontent.com/Desmondgoldsmith/Youtube_clone/main/public/vid7.png"
        channel = "Jason Goddison"
        ch_image = ""
        /> 
    </div>
   
   
    </div>
  )
}

export default Recommendation