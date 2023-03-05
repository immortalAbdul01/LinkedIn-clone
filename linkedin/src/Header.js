import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './Header.css'
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import HeaderOption from './HeaderOption';
import WorkIcon from '@mui/icons-material/Work';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebaseApp';
import { logout, selectUser } from './features/userSlice';

function Header() {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    const logoutApp = () => {
        dispatch(logout())
        auth.signOut()

    }
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
                <HeaderOption avatar={true} title='Logout' onClick={logoutApp} />

            </div>
        </div>
    )
}

export default Header
