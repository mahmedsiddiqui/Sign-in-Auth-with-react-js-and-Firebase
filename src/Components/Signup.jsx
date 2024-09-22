import React, { useState } from 'react'
import './Signup.css'
import { Link } from 'react-router-dom'
import firebase from '../firebaseConfig.js'


const Signup = () => {
    const submit =async(e)=>{
        e.preventDefault()
        try {
            const user = await firebase.auth().createUserWithEmailAndPassword(email,pass)
            if (user) {
                alert("Account Created Successfully")
            }
        } catch (error) {
           alert(error)   
        }
    }
     const [name ,setName] = useState('')
     const [email ,setEmail] = useState('')
     const [pass ,setPass] = useState('')
   

    return (
        <>
            <div className="main-container-signup">
                <div className="header">
                    <h2>signup</h2>
                </div>
                <br />
              
                    <div className="box">
                        <input type="text" value={name} placeholder='User Name' onChange={(e)=>setName(e.target.value) } />
                    </div>
                    <br />
                    <div className="box">
                        <input type="email" value={email} placeholder='E-mail' onChange={(e)=>setEmail(e.target.value)} />
                    </div>
                    <br />
                    <div className="box">
                        <input type="password" value={pass} placeholder='Password' onChange={(e)=>setPass(e.target.value)} />
                    </div>
                
              
                <p className='text' >Already Have An Account   <Link to="/login" >Login Now</Link>    </p>
             
                <button  onClick={submit}  className='btn' >Signup</button>

            </div>
        </>
    )
}

export default Signup
