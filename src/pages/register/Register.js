import React from 'react'
import './Register.scss'
function Register() {
  return (
    <div className='register' style={{
        backgroundImage:'url('netflixregi')'    //////watch at 1:35 min 
        
    }}>
        <div className="top">
            <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png" alt="" />
            <button className='loginButton'>Sign In</button>
        </div>
        <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="input">
            <input type="email" placeholder='email adress'/>
            <button className='registerButton'>Get Started</button>
        </div>
        </div>
    </div>
  )
}

export default Register