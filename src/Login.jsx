import React, { useState } from 'react'
import './sign.css'
import { Link } from 'react-router-dom'
import firebase from '../src/firebaseConfig.js'
import { Navigate } from 'react-router-dom'

const Login = () => {
    const submit =async(e)=>{
        e.preventDefault()
        try {
            const user = await firebase.auth().signInWithEmailAndPassword(email,pass)
            if (user) {
                alert("Login Successfully")
            }
        } catch (error) {
           alert(error)   
        }
    }
   
     const [email ,setEmail] = useState('')
     const [pass ,setPass] = useState('')
   

    return (
        <>
            <div className="main-container-signup">
                <div className="header">
                    <h2>signup</h2>
                </div>
                <br />
              
                   
                    <br />
                    <div className="box">
                        <input type="email" value={email} placeholder='E-mail' onChange={(e)=>setEmail(e.target.value)} />
                    </div>
                    <br />
                    <div className="box">
                        <input type="password" value={pass} placeholder='Password' onChange={(e)=>setPass(e.target.value)} />
                    </div>
                
              
                <p className='text' >Dont Have An Account   <Link to="/" >Create Account</Link>    </p>
             
                <button   onClick={submit}  className='btn' >Login <Navigate to="" /> </button>

            </div>
        </>
    )
}

export default Login
