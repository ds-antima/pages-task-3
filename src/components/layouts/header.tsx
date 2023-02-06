// import * as React from "react";
// import Cta from "../commons/cta";

//   type Link = {
//     label: string;
//     url: string;
//   };

//   const links: Link[] = [
//     {
//       label: "Home",
//       url: "/",
//     },
//     {
//       label: "About",
//       url: "/about",
//     },
//     {
//       label: "Menu",
//       url: "/menu.html",
//     },
//     {
//       label: "Locator",
//       url: "/locator",
//     }
//   ];

//   const Header = () => {
//     const linkDoms = links.map((link) => (
//       <div key={link.label}>
//         <a href={link.url} >
//           {link.label}
//         </a>
//       </div>
//     ));

//   return (
//     <>
//       <div className="centered-container">
//         <nav className="py-3 flex items-center justify-between">
//           <img
//               src="https://a.mktgcdn.com/p/8esDUBrhKJnkaVztLihLsC3quv_5BjLFG9L6MJ0adcs/150x150.png">
//             <div className="flex gap-x-10 text-lg font-semibold">{linkDoms}</div>
//           <div className="hidden space-x-5 sm:block">
//             <Cta buttonText="Order Pickup" url="#" style="primary-cta"></Cta>
//             <Cta buttonText="Order Delivery" url="#" style="secondary-cta"></Cta>
//           </div>
//         </nav>
//       </div>
//     </>
//   );
// };

// export default Header;
import * as React from "react"
export default function Header1(props:any){
    console.log(props._site,"_sfcsgsf")

return(
    <>
    <div className="flex flex-row" style={{width:"1500px",backgroundColor:"black",color:"white",padding: "21px"}}>
    {props._site.c_header.map((res:any)=>{
        return(
            <>
            <div style={{width:"400px", margin:"45px" }}>
            <ul>
              <a href={res.link}>{res.label}</a>
            </ul>
            </div>
            </>
            )
        })}
        <a className="logo" href="\" style={{width:"550px"}}>
        <img src={props._site.c_headerphoto.url}/></a>
        </div>
    </>
)
}