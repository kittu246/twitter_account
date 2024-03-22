import React from 'react'
import twitterLogo from '../../assets/twitterLogo.png'
import { Link } from 'react-router-dom'
import '../login/style.css'
import './style.css'

const SignUp = () => {
  return (
    <section>

        <div className='userAuth'>

        <img src={twitterLogo} alt='twitterLogo'/>
        <h1>Create an Account</h1>
        <input type='text' placeholder='Name'/>
        <input type='password' placeholder='Phone number'/>
        <Link>Use Email</Link>
        <h5>Date of Birth</h5>
        <input type='date' placeholder='date of birth'/>

        <button>Next</button>
        <p style={{textAlign:"center"}}>
            
           Already have an Account ?  <Link to='/login'>Login</Link>
        </p>

        </div>

    </section>
  )
}

export default SignUp