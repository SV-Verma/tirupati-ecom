import React from 'react'

const LogIn = () => {
  return (
    <div>
     <div className="login-container">
      
      <div className="login-main">
        <div className="login-layout">
        <input type="text"  id='name' placeholder='Enter Your Name'/>
        <input type="number" id='number' placeholder='Enter your PhoneNo' />
        <input type="email" id='email' placeholder='Enter Your Email Id' />
         <textarea name="massege" id="msg" cols="30" rows="5" placeholder='Your msg'></textarea>
         <button>Submit</button>
        </div>
      </div>
     </div>
    </div>
  )
}

export default LogIn
