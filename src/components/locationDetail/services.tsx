import * as React from "react";

export default function Servicess(props:any){
  console.log(props,"faq")
 const{service}=props

return(
  <>    
       <div>
       <div className="flex flex-col"><h1 style={{textAlign:"center"}}>Services</h1>
    {service.map((res:any)=>{
      console.log(res,"res")
        return(
            <>
          {/* <div className="hours-sec" style={{width:"50%",justifyContent:"center",textAlign:"center",margin:"5px" ,padding:"5px",background:"#D3D3D3"}}>{res.label}
      </div> */}
      <div style={{alignContent:"center",padding:"3px"}}>      
        <div  style={{backgroundColor:"lightgrey",fontSize:"15px" , padding:"5px"}}>{res.label}</div>
</div>
      
            </>
            )
        })}
        </div>
        </div>
       </>
 )
 }
