import React,{useState} from "react";
import Navbar from "./Navbar"
import Search from "./Search"
import Chats from "./Chats"
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import {  ZoomInSharp} from '@mui/icons-material';

const Sidebar = () => {
  const  [value,setValue]=useState()
  return (
    <div className="sidebar">
    <>  <Navbar />
      <Search/></>
      <Chats/>
      {/* <BottomNavigation
  showLabels
  value={value}
  onChange={(event, newValue) => {
    setValue(newValue);
    console.log(value)
  }}
>
  <BottomNavigationAction label="Recents" icon={< ZoomInSharp />} />
  <BottomNavigationAction label="Favorites" icon={< ZoomInSharp/>} />
  <BottomNavigationAction label="Nearby" icon={< ZoomInSharp/>} />
</BottomNavigation> */}
    </div>

  );
};

export default Sidebar;
