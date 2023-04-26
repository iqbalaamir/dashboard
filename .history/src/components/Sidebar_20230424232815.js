import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/collapse";
import "./sidebar.css";
import NavbarComponent from "./NavbarComponent";
import HomeComponent from "./HomeComponent"
import SidebarComponent from "./SidebarComponent";

export default function Sidebar() {
  return (
    <div className="container-fluid">
      <div className="row">
       <SidebarComponent/>
        <div className="col" style={{backgroundColor:"#f8f9fc",padding:0}}>
       <NavbarComponent/>
       <HomeComponent/>
        </div>
      
      </div>
    </div>
  );
}
