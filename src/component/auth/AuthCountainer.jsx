import {useState} from 'react'
import Login from './Login'
import './AuthContainer.scss'
import Register from './Register'
import Reset from './Reset'

const AuthCountainer = () => {
 /*  const [login, setLogin]= useState(true)
  const [register, setRegister]= useState(false)
  const [reset, setReset] = useState(false)
 */

  const [auth, setAuth] = useState({login: true, register: false, reset: false})

  const handleRegister =()=> {
    setAuth({reset: false, login: false, register: true})
     /* setLogin(false)
     setReset(false)
     setRegister(true) */
  }

  const handleReset =()=> {
    setAuth({reset: true, login: false, register: false})
    /*   setReset(true)
      setLogin(false)
      setRegister(false) */
  }

  const handleBackOnLogin =()=> {
    setAuth({reset: false, login: true, register: false})
   /*  setReset(false)
    setRegister(false)
    setLogin(true) */
  }

  return (
    <section className='--flex-center --100vh --bg-grey'>
      <div className="container box">
        {auth.login && <Login onRegister={handleRegister} onReset={handleReset}/> }
        {auth.register && <Register onLogin={handleBackOnLogin}/> }
        {auth.reset && <Reset  onLogin={handleBackOnLogin}/>  }
          
          
         
      </div>
    </section>
  )
}

export default AuthCountainer