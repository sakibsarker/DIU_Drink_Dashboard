import React from 'react'
import style from '../styles/Login.module.css'
const Login = () => {
  return (
    <div className={style.container}>

        <div className={style.login_container}>
        <div>
        <label for="usname"><h3 className={style.title}>Username</h3></label>
        <input className={style.input} type="text" placeholder="Enter password" name="usname" required/>
        </div>
        <div>
        <label for="psw"><h3 className={style.title}>Password</h3></label>
        <input className={style.input} type="password" placeholder="Enter password" name="psw" required/>
        </div>
        <button className={style.btn}>Login</button>
        </div>

    </div>
    
  )
}

export default Login