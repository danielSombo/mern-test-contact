// import React from 'react'
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { validateEmail } from "../utils/helper";

function LoginForm({ onChange }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isShowPassword, setIsShowPassword] = useState(false);
    const toggleShowPassword = () => {
        setIsShowPassword((prev) => !prev)
    }

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!email) {
            setError("L'adresse email est requise.");
            return;
        }

        if (!validateEmail(email)) {
            setError("Veuillez entrer une adresse email valide.");
            return;
        }

        if (!password) {
            setError("Le mot de passe est requis.");
            return;
        }

        setError("");
    }

    return (
        <form onSubmit={handleLogin} className="bg-white flex flex-col items-center p-6">
            <h2 className="text-2xl text-center text-[#4A4E69] font-bold mb-8">Connexion</h2>
            <div className="">
                <div className="mb-4">
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-[#F5F3F4] w-80 p-2 text-md text-[#4A4E69] font-bold border-none outline-none" placeholder="Adresse email" />
                    {error && (error.includes("email") || !email) && <p className="text-red-500 text-xs mt-1">{error}</p>}
                </div>
                <div className="mb-4 flex justify-between bg-[#F5F3F4] w-full">
                    <input type={isShowPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} className="p-2 text-md text-[#4A4E69] font-bold border-none outline-none" placeholder="Mot de passe" />
                    <button 
                        type="button"
                        onClick={toggleShowPassword}
                        className="text-[#4A4E69] p-2 cursor-pointer">
                            {isShowPassword ? <FaRegEye size={22} /> : <FaRegEyeSlash size={22} />}
                        </button>
                </div>
                {error && password === "" && <p className="text-red-500 text-xs mt-1">{error}</p>}
                </div>
                <div className="my-4">
                    <button type="submit" className="bg-[#4A4E69] text-white px-4 py-2 rounded-lg cursor-pointer">Se connecter</button>
                </div>
            <div>
                <p className="text-[#4A4E69] font-regular">Pas inscrit ?
                    <button className="font-bold text-[#4A4E69] ml-2 cursor-pointer" onClick={onChange} >Inscrivez-vous.</button>
                </p>
            </div>
        </form>
    )
}

export default LoginForm

