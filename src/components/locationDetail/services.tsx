import * as React from "react";

export default function Servicess(props:any){
 // console.log(props.faq,"faq")
 const{service}=props

return(
  <>
   <h1 style={{textAlign:"center"}}>Services</h1>
    {service.map((res:any)=>{
      
        return(
            <>
          <div className="nearby-card" style={{textAlign:"center",margin:"5px" ,padding:"5px",background:"#D3D3D3"}}>{res.label}<p><br /></p>
      </div>
            </>
            )
        })}
       
       </>
 )
 }
