import React from 'react'
import Feed from './Feed'
import Sidebar from './Sidebar'

function Home() {
    return (
        <div className='app_body'>
            <Sidebar />
            <Feed />
        </div>
    )
}

export default Home
