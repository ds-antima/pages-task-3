// import * as React from "react";

// // export default function Faq(props:any){
// //   console.log(props.faq,"faq")

// // return(
// //   <>
// //  <h2 className="text-xl font-semibold mb-4"style={{textAlign:"center"}}>Frequently Asked Questions</h2>
// //     {props.faq && props.faq.map((res:any)=>{
// //         return(
// //             <>
// //           <div style={{textAlign:"center"}}>{res.name}<p><br /></p>
// //           {res.answer}<p><br/></p></div>
// //             </>
// //             )
// //         })}
       
        
       
      
// //   </>
// // )
// // }

// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import Accordion from "@material-ui/core/Accordion";
// import AccordionDetails from "@material-ui/core/AccordionDetails";
// import Typography from "@material-ui/core/Typography";
// import AccordionSummary from "@material-ui/core/AccordionSummary";
  
// export default function Faq(props:any){
//   return (
//     {props.faq && props.faq.map((res:any)=>{
//       return(
//     <div style={{}}>
//       <h4>How to create Accordion in ReactJS?</h4>
//       <Accordion style={{ width: 400 }}>
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel1a-content"
//         >
//           <Typography
//             style={{
//               fontWeight: 10,
//             }}
//           >
//             {res.name}
//           </Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography>{res.answer}</Typography>
//         </AccordionDetails>
//       </Accordion>
//     </div>
//      ) }
//     )
//   })}
import * as React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import AccordionSummary from "@material-ui/core/AccordionSummary";
export default function Faq(props:any){
  console.log(props.faq,"faq")

return(
  <>
  <h1 style={{textAlign:"center"}}>FAQs</h1>
 
    {props.faq && props.faq.map((res:any)=>{
        return(
            <>
            
            <div style={{width:"100%",textAlign:"center"}}>
              
      
      <Accordion style={{ width: "100%",margin:"5px",backgroundColor:"grey",textAlign:"center"}}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}aria-controls="panel1a-content" style={{borderBottom:"1px solid #6c4e25" ,textAlign:"center"}}>
      
            <h4>{res.name}</h4>
        
          <Typography style={{fontWeight: "10px" }}>
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor:"grey"}}>
          <Typography>{res.answer}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
            </>
            )
        })}
       
        
       
      
  </>
)
}