import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'; 
import VerifiedUserOutlinedIcon from '@material-ui/icons/VerifiedUserOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import React from "react";


export const MenuItems = [
      // {
      //   url: "/timesheet/dashboard",
      //   type: "LINK",
      //   name: "Dashboard",
      //   id: "dashboard",
      //   icon: <HomeOutlinedIcon />
      // },
      {
        url: "/timesheet/timeTracker",
        type: "LINK",
        name: "Time Tracker",
        id: "timeTracker",
        icon: <DescriptionOutlinedIcon />
      },
      {
        url: "/timesheet/projects",
        type: "LINK",
        name: "Projects",
        id: "projects",
        icon: <VerifiedUserOutlinedIcon />
      },
      {
        url: "/timesheet/members",
        type: "LINK",
        name: "Team & Members",
        id: "members",
        icon: <VerifiedUserOutlinedIcon />
      },
      {
        url: "/timesheet/costHead",
        type: "LINK",
        name: "Cost Head",
        id: "costHead",
        icon: <VerifiedUserOutlinedIcon />
      },
      {
        url: "/timesheet/settings",
        type: "LINK",
        name: "Settings",
        id: "settings",
        icon: <VerifiedUserOutlinedIcon />
      }
    ];
