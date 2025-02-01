// import React from 'react'
import { useState } from "react"
import { validateEmail } from "../utils/helper"


function ContactForm({onClose}) {
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [email, setEmail] = useState("");
    const [numOne, setNumOne] = useState("");
    const [numTwo, setNumTwo] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!nom) {
            setError("Votre nom est requis");
            return
        }

        if (!prenom) {
            setError("Votre prénom est requis");
            return
        }
        if (!email) {
            setError("L'adresse email est requise.");
            return
        }

        if (!validateEmail(email)) {
            setError("Veuillez entrer une adresse email valide.");
            return;
        }

        if (!numOne) {
            setError("Veuillez entrer votre numéro de téléphone");
            return;
        }

        if (!numTwo) {
            setError("Veuillez entrer votre deuxième numéro de téléphone");
            return;
        }
    }


    return (
        <form onSubmit={handleSubmit} className="bg-white text-gray-800 p-6 rounded-lg shadow-md flex flex-col justify-center items-center m-auto">
            <h3 className="font-semibold mb-6 text-[#4A4E69] text-center text-xl">Ajouter un contact</h3>
            <div className="space-y-2">
                <div className="mb-2">
                    <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} className='bg-[#F5F3F4] w-full p-2 text-md text-[#4A4E69] font-semibold border-none outline-none' placeholder="Nom" />
                    {error && (error.includes("nom") || !nom) && <p className="text-red-500 text-xs mt-1">{error}</p>}
                </div>
                <div className="mb-2">
                    <input type="text" value={prenom} onChange={(e) => setPrenom(e.target.value)} className='bg-[#F5F3F4] w-full p-2 text-md text-[#4A4E69] font-semibold border-none outline-none' placeholder="Prénom" />
                    {error && (error.includes("prenom") || !prenom) && <p className="text-red-500 text-xs mt-1">{error}</p>}
                </div>
                <div className="mb-2">
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='bg-[#F5F3F4] w-full p-2 text-md text-[#4A4E69] font-semibold border-none outline-none' placeholder="Adresse email" />
                    {error && (error.includes("email") || !email) && <p className="text-red-500 text-xs mt-1">{error}</p>}
                </div>
                <div className="mb-2">
                    <input type="text" value={numOne} onChange={(e) => setNumOne(e.target.value)} className='bg-[#F5F3F4] w-full p-2 text-md text-[#4A4E69] font-semibold border-none outline-none' placeholder="Num de Téléphone 1" />
                    {error && (error.includes("numOne") || !numOne) && <p className="text-red-500 text-xs mt-1">{error}</p>}
                </div>
                <div className="mb-2">
                    <input type="text" value={numTwo} onChange={(e) => setNumTwo(e.target.value)} className='bg-[#F5F3F4] w-full p-2 text-md text-[#4A4E69] font-semibold border-none outline-none' placeholder="Num de Téléphone 2" />
                    {error && (error.includes("numTwo") || !numTwo) && <p className="text-red-500 text-xs mt-1">{error}</p>}
                </div>
            </div>
            <div className="flex justify-between mt-4 space-x-4">
                <button type="submit" className="bg-[#4A4E69] text-white px-4 py-1 rounded cursor-pointer">Enregistrer</button>
                <button className="bg-[#4A4E69] text-white px-4 py-1 rounded cursor-pointer" onClick={onClose}>Annuler</button>
            </div>
        </form>
    )
}

export default ContactForm
