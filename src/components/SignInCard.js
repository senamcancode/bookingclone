import React from 'react'
import "./SignInPageStyle.css"
import { FcGoogle } from 'react-icons/fc'
import { AiFillFacebook } from 'react-icons/ai'
import { MdMobileFriendly } from 'react-icons/md'

const SignInCard = () => {
  return (
    <div className="signin__container">
        <div className="email__card">
            <div className="email__signin__text">
                <h3>Sign in or create an account</h3>
                <p>Email address</p>
            </div>
            <div className="email__signin__input">
                <label>
                        <input name="myInput"  className="email__input"/>
                </label>
                <button className="input__button">Continue with email</button>
            </div>
            <div className="signin__alt__methods">
                <div className="altsignin__icons">
                    <FcGoogle className="google__icon"/>
                    <AiFillFacebook className="facebook__icon"/>
                    <MdMobileFriendly className="mobile__icon"/>
                </div>
                <p className ="signin__p" id="moreways__text">More ways to sign in </p>
            </div>
            <div className="signin__terms">
                <p className="signin__p">By signing in in or creating an account, you agree with our <span className="terms__text">Terms & Conditions</span> and <span className="terms__text">Privacy Statement</span> </p>
            </div>
            <div className="signin__rights">
                <p className="signin__p">All rights reserved. </p>
                 <p> Copyright 2006 - 2023 - Looking.com<span dangerouslySetInnerHTML={{ "__html": "&trade;" }} /></p>
            </div>
        </div>
</div>
  )
}

export default SignInCard; 