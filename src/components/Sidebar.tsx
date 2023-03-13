import '../css/component/sidebar.css'
import Logo from "../assets/images/Rectangle.svg";
import {
  Timeline,
} from "@material-ui/icons";
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssessmentIcon from '@mui/icons-material/Assessment';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';

import { Link } from "react-router-dom";
import React from 'react';

function Sidebar() {
  return (
    <div className="sidebar">
        <div className="topLeft">
          <img  src={Logo} alt="logo" />
          

        </div>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
              <DashboardIcon className="sidebarIcon" />
              
            </li>
            </Link>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              
            </li>

            <li className="sidebarListItem">
                <BusinessCenterIcon className="sidebarIcon" />
                
              </li>
      
              <li className="sidebarListItem">
                <PeopleOutlineIcon className="sidebarIcon" />
                
              </li>
           
             
            {/* </Link> */}
            <li className="sidebarListItem">
              <AssessmentIcon className="sidebarIcon" />
              
            </li>
            </ul>
          </div>
          
          
          <div className='sidebarMenu'>
          <ul className="sidebarList2">
            <li className="sidebarListItem">
              <SettingsIcon className="sidebarIcon" />
            </li>

            <li className="sidebarListItem">
              <LogoutIcon className="sidebarIcon" />
              
            </li>
            </ul>
            </div>
          </div>
           
          
      
    </div>
  );
}

export default Sidebar;