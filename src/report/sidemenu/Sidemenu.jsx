import React from "react";
import "./sidemenu.css";
import {
  HiOutlineDesktopComputer,
  HiOutlineDocumentText,
} from "react-icons/hi";
import { AiOutlineAppstore } from "react-icons/ai";

const Sidemenu = (props) => {
  const { reportSlidNav,setServerSelect,ActiveSaveButton ,ServerSelect} = props;
  return (
    (reportSlidNav === false) ?  
      <div className="sidemenu_wrapper">
        {/* <button className="advertiser menu-btn">
          <HiOutlineDesktopComputer />
          ADVERTISER
        </button> */}
        
        <button className="advertiser menu-btn" style={{borderColor:( ServerSelect=== "new" ? "orange" : "")}} onClick={()=>{setServerSelect("new")}}>
          <AiOutlineAppstore />
           Campiangns
        </button>
        <button className="advertiser menu-btn" style={{borderColor:( ServerSelect=== "s1" ? "orange" : "")}} onClick={()=>{setServerSelect("s1")}}>
          <HiOutlineDocumentText />
            Ad Server
        </button>
        <button className="advertiser menu-btn" style={{borderColor:( ServerSelect=== "s2" ? "orange" : "")}} onClick={()=>{setServerSelect("s2")}}>
          <AiOutlineAppstore />
         Dbm Server
        </button>

       
      
      </div>
    
   :
   ""
  );
};

export default Sidemenu;
