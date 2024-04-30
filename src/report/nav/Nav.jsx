import React from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
} from "reactstrap";
import "./nav.css";
import { BiMenu } from "react-icons/bi";
import { ImCross } from "react-icons/im";
const Nav = (props) => {
  const { reportSlidNav, setReportSlidNav } = props;
  const slidSETupdate = () => {
    setReportSlidNav(!reportSlidNav);
  };
  return (
    <div className="report_nav">
      <div>
        <h4>Ekaleido</h4>

        {reportSlidNav === false ? (
          <ImCross className="nav-Menu" onClick={slidSETupdate} />
        ) : (
          <BiMenu className="nav-Menu" onClick={slidSETupdate} />
        )}
      </div>

      {/* <div className="nav_options">
        <UncontrolledDropdown className="nav_btn export">
          <DropdownToggle caret>EXPORT</DropdownToggle>
          <DropdownMenu>
            <DropdownItem>PDF</DropdownItem>
            <DropdownItem>PPT</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
        <UncontrolledDropdown className="nav_btn username">
          <DropdownToggle caret>USERNAME</DropdownToggle>
          <DropdownMenu>
            <DropdownItem>PPT</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div> */}
    </div>
  );
};

export default Nav;
