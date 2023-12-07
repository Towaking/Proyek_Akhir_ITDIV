import React, { useEffect, useState } from 'react'
import { Navbar } from '../component/Navbar/Navbar'
import { Footer } from '../component/Footer/Footer'
import { Sponsor } from '../component/Sponsor/Sponsor'
import { Hero } from '../component/Hero/Hero'
import { LandingCaraosel } from '../component/LandingCaraosel/LandingCaraosel'
import { Promo } from '../component/Promo/Promo'
import { Navbar_2 } from '../component/Navbar_2/Navbar_2'


export function Landing() {
  const [checkValue, setCheckValue] = useState(0);
  const [ViewAll, setViewAll] = useState(false);
  const [islogin,setislogin] = useState(
    localStorage.getItem('isLogin') );

    useEffect(()=>{
      setTimeout(() => {
        onChangeAttributes(()=>(checkValue+1)%3);
      }, 5000);
    },[])

  const detail = 
  [
    {
      title: "Spiderman: Across The Spider Verse",
      description: "Miles Morales returns once again to save the multiverse! After being reunited with Gwen Stacy, Miles races across the multiverse to try and defeat a powerful foe known as the Spot. He meets many other spider people. But Miguel O'Hara doesn't approve of Miles' actions to save everyone, following canon events.",
      image: "images/spider.png",
      rating : 8.7,
    },
    {
      title : "Transformers: Rise of the Beasts",
      description: "During the '90s, a new faction of Transformers - the Maximals - join the Autobots as allies in the battle for Earth.",
      image: "/images/trans.png",
      rating: 8.3,
    },
    {
      title: "Oppenheimer",
      description: "The story of American scientist, J. Robert Oppenheimer, and his role in the development of the atomic bomb.",
      image: "/images/oppenheimer.png",
      rating: 8.5,
    }
  ]
 
  const onChangeAttributes = (value:any) => {
    
    if(value < 0){
      setCheckValue(2);
    }
    else{
      setCheckValue(value);
    }
    
  }
  const promoList = 
  [
    {
      src: "images/buy1get1.png",
    },
    {
      src:"images/disc20.png",
    },
  ]
  const promoListAll = 
  [
    {
      src: "images/buy1get1.png",
    },
    {
      src:"images/disc20.png",
    },
    {
      src: "images/buy1get1.png",
    },
    {
      src:"images/disc20.png",
    },
    {
      src: "images/buy1get1.png",
    },
    {
      src:"images/disc20.png",
    },
    {
      src: "images/buy1get1.png",
    },
    {
      src:"images/disc20.png",
    },
  ]

  function promotion(){
    if(ViewAll === false){
      return promoList.map(promotion => {
        return (
          <Promo src={promotion.src}/>
        )
      })
    }
    else if(ViewAll === true){
      return  promoListAll.map(promotion=>{
        return (
          <Promo src={promotion.src}/>
        )
      })
    }
    
  }

  return (
    <div>
      {islogin ? <Navbar_2/> : <Navbar/>}
      <Hero/>
      <section className='landing_main'>
        <div className="landing_main_populer">
          <div className="landing_main_populer_title">
            <span>POPULAR MOVIE THIS WEEK</span>
          </div>
          <div className="landing_main_populer_caraosel">
            <img src="images/left arrow.png" alt="arrow" draggable="false"   onClick={()=> onChangeAttributes((checkValue-1)%3)}/>
              <LandingCaraosel 
              title={detail[checkValue].title}
              description = {detail[checkValue].description}
              image= {detail[checkValue].image}
              rating={detail[checkValue].rating}
              />
            <img src="images/right arrow.png" alt="arrow" draggable="false" onClick={()=> onChangeAttributes((checkValue+1)%3)}/>
          </div>
          <div className="landing_main_populer_caraosel_select">
            <input type="radio"  name="" id="0" checked = {checkValue === 0} onChange={()=>onChangeAttributes(0)}/>
            <input type="radio" name="" id="1" checked = {checkValue === 1} onChange={()=>onChangeAttributes(1)}/>
            <input type="radio" name="" id="2" checked = {checkValue=== 2}  onChange={()=>onChangeAttributes(2)}/>
          </div>
        </div>
        <div className="landing_main_promotions">
          <h2 className='landing_main_promotions_title'>PROMOTIONS</h2>
          <div className='landing_main_promotions_offer'>
            {promotion()}
          </div>
          <div className='landing_main_promotions_offer_view'>
            {ViewAll === false ? <button className='LandingButton' onClick={()=>setViewAll(true)}>View All</button> : <button className='LandingButton' onClick={()=>setViewAll(false)}>Close</button>}

          </div>
        </div>
      </section>
      <Sponsor/>
      <Footer/>
    </div>
  )
}

export default Landing;