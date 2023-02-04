import * as React from "react";
import Footer from "./footer";
import Nav from "./Nav";
import PhotoSlider from "../locationDetail/PhotoSlider"
type Props = {
    title?: string;
    _site?: any;
    global:any;
    children?: React.ReactNode;
};
  
  const PageLayout = ({
    title,
    _site,
    global,
    children,
  }: Props) => {
    return (
        <>
        
      <PhotoSlider photoGallery={global.c_headerbanner} />
                {children}
      
        </>
    );
  };

export default PageLayout;
  