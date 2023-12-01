import React, { useState } from 'react'

export default function Profile({Title,Desc}:any) {
    const [isedit,setisedit] = useState(false);
    
    function check(): any{
      if(isedit){
        setisedit(()=> false);
      }else{
        setisedit(()=> true);
      }
    }
  return (
    <div className="Profile_email">
            <span>{Title}</span>
            <div className="Profile_edit">
                <span contentEditable={isedit} className={isedit ? "Profile_editable" : ""}>{Desc}  </span>
                <img src="/images/icon_pencil.png" alt="edit" onClick={()=>check()}/>
            </div>
        </div>
  )
}
