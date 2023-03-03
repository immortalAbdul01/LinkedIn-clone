import React from 'react'
import { Avatar } from '@mui/material'
import './Sidebar.css'
function Sidebar() {
    const recentItem = (topic) => {
        <div className="sidebar_recent">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    }
    return (
        <div className="sidebar">
            <div className="sidebar_top">
                <img src="https://th.bing.com/th?id=OIP.q_nR36q-QDKAKDt6jUirxgHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt="" />
                <Avatar className='sidebar_avatar' src='https://th.bing.com/th/id/OIP.8wRX92nsxdRjnXGG2beePgHaJH?w=134&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7'></Avatar>
                <h3>Joey Tribbiani </h3>
                <h4>joeytribinanni@gmail.com </h4>

            </div>
            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p> who viewed your profile

                    </p>
                    <p className="sidebar_stat_number">
                        345
                    </p>

                </div>
                <div className="sidebar_stat">
                    <p> Post impression
                    </p>
                    <p className="sidebar_stat_number">
                        344556
                    </p>

                </div>

            </div>
            <div className="sidebar_bottom">
                <p>Recent</p>
                <div className="sidebar_recent">
                    <span className="sidebar_hash">#</span>
                    <p>actor</p>
                </div>

                <div className="sidebar_recent">
                    <span className="sidebar_hash">#</span>
                    <p>days of our lives</p>
                </div>

                <div className="sidebar_recent">
                    <span className="sidebar_hash">#</span>
                    <p>game show host</p>
                </div>

                <div className="sidebar_recent">
                    <span className="sidebar_hash">#</span>
                    <p>Dr. Drake rumoray</p>
                </div>


            </div>
        </div>
    )
}

export default Sidebar
