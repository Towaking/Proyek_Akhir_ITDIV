import React from 'react'

import PopulerView from '../props/FilmProps';

export function LandingCaraosel(detail: PopulerView) {
  const star = 'images/star_rating.png';

  function rating(rate:number){
    if(rate === 0){
      return (
        <img src={star} alt="star" id='zerostar'/>
      )
    }
    else if(rate > 0 && rate < 2){
        return (
          <img src={star} alt="star" id='zerohalfstar'/>
        )
      }
    else if(rate === 2){
      return (
        <img src={star} alt="star" id='onestar'/>
      )
    }
    else if(rate > 2 && rate < 4){
        return (
          <img src={star} alt="star" id='onehalfstar'/>
        )
      }
    else if(rate === 4){
      return (
        <img src={star} alt="star" id='twostar'/>
      )
    }
    else if(rate > 4 && rate < 6){
        return (
          <img src={star} alt="star" id='twohalfstar'/>
        )
      }
    else if(rate === 6){
      return (
        <img src={star} alt="star" id='threestar'/>
      )
    }
    else if(rate >6 && rate < 8){
        return (
          <img src={star} alt="star" id='threehalfstar'/>
        )
      }
    else if(rate === 8){
      return (
        <img src={star} alt="star" id='fourstar'/>
      )
    }
    else if(rate >8 && rate < 10){
        return (
          <img src={star} alt="star" id='fourhalfstar'/>
        )
      }
    else if(rate === 10){
      return (
        <img src={star} alt="star" id='fivestar'/>
      )
    }
    

  }
    return (
        <div className='Landing_Caraosel'>
            <div className="Landing_Caraosel_data">
                <div className="Landing_Caraosel_title">{detail.title}</div>
                <div className="Landing_Caraosel_desc">{detail.description}</div>
                <div className="Landing_Caraosel_rating">
                   
                   {rating(detail.rating)}
                   <div>{detail.rating}/10</div>
                   </div>
                <div className="LandingButton" >View Detail</div>
            </div>
            <div className="Landing_Caraosel_img">
                <img src={detail.image} alt={detail.title} />
            </div>
        </div>
  )
}
