import React,{Component} from 'react'
import './recommendation.css'
import Videos from './Videos'
import { deepOrange, deepPurple } from '@mui/material/colors';
import "~slick-carousel/slick/slick.css"; 
import "~slick-carousel/slick/slick-theme.css";




export default class Recommendation extends Component{
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

  return (
    <div className='rec'>
     <h2>Recommendations</h2>
     {/* <Carouselitem/> */}
     <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
     {/* end */}
     
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
}
// export default Recommendation