import React from 'react'
import "./SignInPageStyle.css"
import {BsQuestionCircle} from 'react-icons/bs'

const SignInHeader = () => {
  return (
    <div className="signinheader__container">
        <div className="signinheader">
            <h1 className="navbar-logo">Looking.com</h1>
            <BsQuestionCircle className="question__icon"/>
        </div>
    </div>
  )
}

export default SignInHeader

