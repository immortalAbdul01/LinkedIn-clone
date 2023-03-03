import { Avatar } from '@mui/material'
import React from 'react'
import InputOption from './InputOption'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import './Post.css'
import SendIcon from '@mui/icons-material/Send';
import ShareIcon from '@mui/icons-material/Share';
function Post({ name, description, message, photo, avtsrc }) {
    return (
        <div className="Post">
            <div className="post_header">
                <Avatar src={avtsrc} />
                <div className="post_info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="post_body">
                <p>{message}</p>
                <img src={photo} alt="" />
            </div>
            <div className="post_buttons">
                <InputOption Icon={ThumbUpIcon} title='like' color='gray' />
                <InputOption Icon={ChatBubbleOutlineIcon} title='comment' color='gray' />
                <InputOption Icon={SendIcon} title='send' color='gray' />
                <InputOption Icon={ShareIcon} title='share' color='gray' />
            </div>
        </div>
    )
}

export default Post
