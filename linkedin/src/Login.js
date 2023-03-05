import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from './features/userSlice'
import { auth } from './firebaseApp'
import './Login.css'
function Login() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [picUrl, setpicUrl] = useState('')
    const dispatch = useDispatch()
    const loginToApp = (e) => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(email, password).then((userAuth) => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                picUrl: userAuth.user.photoURL
            }))
        }).catch(err => alert(err))

    }
    const register = () => {
        if (!name) {
            return alert('please enter your name')
        }

        auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: picUrl
            }).then(() => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoURL: picUrl

                }))
            })
        }).catch(err => alert(err))

    }
    return (
        <div className='Login'>
            <img src="https://th.bing.com/th/id/OIP.PfyvizTT6ujUUfgggySkLwHaEK?pid=ImgDet&rs=1" alt="" />
            <form action="">
                <input value={name} onChange={e => setName(e.target.value)} type="text" name="" id="" placeholder='full name  ' />
                <input value={picUrl} onChange={e => setpicUrl(
                    e.target.value)
                } type="text" placeholder='picture profile url' />
                <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder='enter email' />
                <input value={password} onChange={e => setPassword(e.target.value)} type="password" name="" id="" placeholder='password' />
            </form>
            <button onClick={register}>Sign In</button>
            <p>Already a member then just enter email and password and click here{" "}

                <span className='login_register' onClick={loginToApp}>Log in</span>
            </p>
        </div>
    )
}

export default Login
