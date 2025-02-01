// import React from 'react'
import LoginForm from "../components/LoginForm"
import SignupForm from "../components/SignupForm"
import { useState } from "react"

function AuthView() {
    const [isLoginForm, setIsLoginForm] = useState(true);
    const toogleForm = () => {
        setIsLoginForm((prev) => !prev)
    }
    return (
        <div className="bg-[#F5F3F4] flex flex-col justify-center items-center h-screen">
            <div className="">
                {isLoginForm ? (<LoginForm onChange={toogleForm} />) : <SignupForm onChange={toogleForm} />}
            </div>
        </div>
    )
}

export default AuthView
