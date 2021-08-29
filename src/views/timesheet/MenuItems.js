import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'; 
import VerifiedUserOutlinedIcon from '@material-ui/icons/VerifiedUserOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import TimerIcon from '@material-ui/icons/Timer';
import React from "react";
import WorkIcon from '@material-ui/icons/Work';
import GroupIcon from '@material-ui/icons/Group';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import SettingsIcon from '@material-ui/icons/Settings';
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
        icon: <TimerIcon />
      },
      {
        url: "/timesheet/projects",
        type: "LINK",
        name: "Projects",
        id: "projects",
        icon: <WorkIcon />
      },
      {
        url: "/timesheet/members",
        type: "LINK",
        name: "Team & Members",
        id: "members",
        icon: <GroupIcon />
      },
      {
        url: "/timesheet/costHead",
        type: "LINK",
        name: "Cost Head",
        id: "costHead",
        icon: <AttachMoneyIcon />
      },
      {
        url: "/timesheet/settings",
        type: "LINK",
        name: "Settings",
        id: "settings",
        icon: <SettingsIcon />
      }
    ];
