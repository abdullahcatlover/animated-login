import React from 'react'
import RegisterImg from '../../assets/register.webp'

const Register = ({onLogin}) => {
  return (
    <div className='main-container --flex-center'>
        <div className="form-container">
          <form className='--form-control'>
               <h2 className='--color-danger --text-center'>Register</h2>
               <input type="text" className='--width-100' placeholder='UserName'/>
               <input type="email" className='--width-100' placeholder='Email'/>
               <input type="password" className='--width-100' placeholder='Password'/>
               <button className='--btn --btn-primary --btn-block'>Login</button>
               <span className='--text-sm --block'>
                Do you have an account?
                <a href="#" className='--text-sm' onClick={onLogin}>Login</a>
               </span>
          </form>  
        </div>
        <div className="img-container">
            <img src={RegisterImg} alt="register"/>
        </div>
    </div>
  )
}

export default Register