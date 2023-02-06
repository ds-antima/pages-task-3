import * as React from "react";

export default function Servicess(props:any){
 // console.log(props.faq,"faq")
 const{service}=props

return(
  <>    

       <div><h1 style={{textAlign:"center"}}>Services</h1></div>
    {service.map((res:any)=>{
      
        return(
            <>
          <div className="hours-sec" style={{textAlign:"center",margin:"5px" ,padding:"5px",background:"#D3D3D3"}}>{res.label}
      </div>
            </>
            )
        })}
       
       </>
 )
 }
