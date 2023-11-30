import React, { useState } from 'react'

export default function GetSeat(props:any) {
    const [click,setclick] = useState(false);
    const [bgc,setbgc] = useState("#36A5F6");
    const [txt,settxt] = useState("#fff");

    function check(element:any):boolean{
        return element == 'b10' || element == 'c10' || element == 'd10' || element == 'e10' || element == 'f10' || element == 'g10' || element== 'h10' ? true : false;
    }
    
    function isClicked():any{

        if(click == false){
            setbgc("#CDCDCD");
            settxt("transparent");
            setclick(true);
            props.onClick(props.element);
        }
        else{
            setbgc("#36A5F6");
            settxt("#fff");
            setclick(false);
            props.onClick("-");
        }
      }

  return (
    <div className={check(props.element) ? 'hide' : 'seatbox'} style={{backgroundColor: bgc, color:txt}} onClick={()=>!check(props.element) ? isClicked() : ""}>{props.element}</div>
  )
}
