import React from 'react'
import './Header.css'
import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
function HeaderOption({ avatar, Icon, title, onClick }) {
    const user = useSelector(selectUser)
    return (
        <div onClick={onClick} className='HeaderOption' >
            {Icon && <Icon className='header_option_icon' />}
            {avatar && (<Avatar className='header_option_icon' src={user?.photoUrl} ></Avatar>)}
            <h3 className='header_option_title' >{title}</h3>



        </div>
    )
}

export default HeaderOption
