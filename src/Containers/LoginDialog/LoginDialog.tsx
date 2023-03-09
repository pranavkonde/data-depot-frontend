import React from 'react'
import { BsGithub } from 'react-icons/bs'
import './LoginDialog.scss'

function LoginDialog() {
  return (
    <div className='LoginDialog'>
        <p className="LoginDialog__title">Login</p>
        <div className="LoginDialog__buttonContainer">
            <div className="button" onClick={()=>{}}>
                <BsGithub/>&nbsp;Login with Github
            </div>
        </div>
    </div>
  )
}

export default LoginDialog