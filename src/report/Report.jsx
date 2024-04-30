import React, { useState } from "react";
import Nav from "./nav/Nav";
import Sidemenu from "./sidemenu/Sidemenu";
import Reporting from "./reporting/Reporting";
import "./report.css";

const Report = () => {
  const [reportSlidNav, setReportSlidNav] = useState(false);
  const [ServerSelect,setServerSelect] = useState("s1")
  const [ActiveSaveButton,setActiveSaveButton] = useState("")
  const [OpenMOdal,setOpenModal] = useState("")
  return (
    <div className="reporting_wrapper">
      <Nav setReportSlidNav={setReportSlidNav} reportSlidNav={reportSlidNav}  />
      <Sidemenu reportSlidNav={reportSlidNav} setServerSelect ={setServerSelect} ActiveSaveButton ={ActiveSaveButton} ServerSelect ={ServerSelect}/>
      <Reporting  ServerSelect={ServerSelect} setActiveSaveButton={setActiveSaveButton} setServerSelect={setServerSelect}  />
    </div>
  );
};

export default Report;
