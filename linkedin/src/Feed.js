import React, { useEffect, useState } from 'react'
import AddBoxIcon from '@mui/icons-material/AddBox';
import './Feed.css'
import SendIcon from '@mui/icons-material/Send';
import InputOption from './InputOption';
import WorkIcon from '@mui/icons-material/Work';
import ImageIcon from '@mui/icons-material/Image';
import VideocamIcon from '@mui/icons-material/Videocam';
import { db } from './firebaseApp'
import FlipMove from 'react-flip-move'
import firebase from 'firebase'
// import * as firebase from 'firebase/app';
import NewspaperIcon from '@mui/icons-material/Newspaper';

// import firebase from 'firebase';

import Post from './Post';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
// import { Input } from '@mui/material';
function Feed() {
    const user = useSelector(selectUser)
    const [posts, setPosts] = useState([])
    const [input, setInput] = useState('')
    useEffect(() => {
        db.collection('pros').orderBy('createdat', 'desc').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => ({

                id: doc.id,
                data: doc.data(),
            }
            )))
        })
    }, [])
    const sendFunction = (e) => {
        e.preventDefault()
        db.collection('pros').add({
            name: user.displayName,
            description: user.email,
            message: input,
            photo: '',
            avtsrc: user.photoUrl,
            createdat: firebase.firestore.FieldValue.serverTimestamp()
        })
        setInput('')
    }
    return (
        <div className="Feed">
            <div className="input_container">
                <div className="feed_input">
                    < AddBoxIcon />
                    <form action="">
                        <input value={input} onChange={e => {
                            setInput(e.target.value)
                        }} type="text" />
                        <button type='submit' onClick={sendFunction}><SendIcon /></button>
                    </form>
                </div>
                <div className="feed_inputOpt">
                    <InputOption Icon={ImageIcon} title='Photo' color='skyblue' />
                    <InputOption Icon={VideocamIcon} title='Video' color='greenyellow' />
                    <InputOption Icon={WorkIcon} title='Job' color='purple' />
                    <InputOption Icon={NewspaperIcon} title='blog' color='hotpink' />
                </div>
            </div>
            <FlipMove>

                {posts.map(({ id, data: { name, description, message, photo, avtsrc } }) => (
                    <Post
                        key={id}
                        name={name}
                        description={description}
                        message={message}
                        photo={photo}
                        avtsrc={avtsrc}
                    />
                ))}
            </FlipMove>
            {/* <Post name='Joey Tribbiani' description='actor' message='Finally done with the shooting of days of our lives one of the greatest soap opera and this wouldnt have been possible without the writiers, By the way how you doing ?' avtsrc='https://th.bing.com/th/id/OIP.8wRX92nsxdRjnXGG2beePgHaJH?w=134&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7' /> */}
            <Post name='Ross Geller' description='Palentologist' message='Someone at work ate my sandwich' avtsrc='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNhG7URqPsU3b-Mdl_jALLov2SuNOpPoIPTg&usqp=CAU' />
            <Post name='Chandler Bing' description='copy-writer' message='What did the police say?' avtsrc='https://th.bing.com/th/id/OIP.258JcH3PUuPZILMCD9ww1AHaEK?w=296&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7' />
            <Post name='Joey Tribbinai' description='Dr. Drake Rumuray from days of our lives' message='Well, the fridge broke, so I had to eat everything' avtsrc='https://th.bing.com/th/id/OIP.8wRX92nsxdRjnXGG2beePgHaJH?w=134&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7' />
        </div>
    )
}

export default Feed
