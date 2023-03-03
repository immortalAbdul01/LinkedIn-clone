import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './Header.css'
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import HeaderOption from './HeaderOption';
import WorkIcon from '@mui/icons-material/Work';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
    return (
        <div className="header">
            <div className="header_left">
                <img src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG24.png " alt="" />
            </div>
            <div className="header_search">

                <SearchIcon></SearchIcon>
                <input type=" " placeholder='search' />
            </div>
            <div className="header_right">
                <HeaderOption Icon={HomeIcon} title='Home' />
                <HeaderOption Icon={WorkIcon} title='Jobs' />
                <HeaderOption Icon={NotificationsIcon} title='notifications' />
                <HeaderOption Icon={ChatIcon} title='Messages' />
                <HeaderOption avatar='https://th.bing.com/th/id/OIP.8wRX92nsxdRjnXGG2beePgHaJH?w=134&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7' title='me' />

            </div>
        </div>
    )
}

export default Header
