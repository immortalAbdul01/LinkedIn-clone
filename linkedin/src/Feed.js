import React, { useState } from 'react'
import AddBoxIcon from '@mui/icons-material/AddBox';
import './Feed.css'
import SendIcon from '@mui/icons-material/Send';
import InputOption from './InputOption';
import WorkIcon from '@mui/icons-material/Work';
import ImageIcon from '@mui/icons-material/Image';
import VideocamIcon from '@mui/icons-material/Videocam';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import Post from './Post';
function Feed() {
    const [post, setPost] = useState([])
    return (
        <div className="Feed">
            <div className="input_container">
                <div className="feed_input">
                    < AddBoxIcon />
                    <form action="">
                        <input type="text" />
                        <SendIcon />
                    </form>
                </div>
                <div className="feed_inputOpt">
                    <InputOption Icon={ImageIcon} title='Photo' color='skyblue' />
                    <InputOption Icon={VideocamIcon} title='Video' color='greenyellow' />
                    <InputOption Icon={WorkIcon} title='Job' color='purple' />
                    <InputOption Icon={NewspaperIcon} title='blog' color='hotpink' />
                </div>
            </div>
            <Post name='Joey Tribbiani' description='actor' message='Finally done with the shooting of days of our lives one of the greatest soap opera and this wouldnt have been possible without the writiers, By the way how you doing ?' avtsrc='https://th.bing.com/th/id/OIP.8wRX92nsxdRjnXGG2beePgHaJH?w=134&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7' />
            <Post name='Ross Geller' description='Palentologist' message='Excited to tell you guys that I will be getting a tenuer for doing reasearch on dinosources' avtsrc='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNhG7URqPsU3b-Mdl_jALLov2SuNOpPoIPTg&usqp=CAU' />
        </div>
    )
}

export default Feed
