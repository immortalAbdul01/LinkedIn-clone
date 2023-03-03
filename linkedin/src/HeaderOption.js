import React from 'react'
import './Header.css'
import { Avatar } from '@mui/material'
function HeaderOption({ avatar, Icon, title }) {
    return (
        <div className='HeaderOption' >
            {Icon && <Icon className='header_option_icon' />}
            {avatar && <Avatar className='header_option_icon' src={avatar} />}
            <h3 className='header_option_title' >{title}</h3>


        </div>
    )
}

export default HeaderOption
