
// import React from 'react'
import { getInitials } from "../utils/helper";


function ProfilCard({ profile }) {
    return (
        <div className='bg-white text-gray-800 p-6 rounded-lg shadow-md flex flex-col justify-center items-center m-auto'>
            <h1 className="text-[#4A4E69] text-2xl text-center font-semibold mb-6">Mon profil</h1>
            <div className="bg-[#F5F3F4] text-[#4A4E69] rounded-full w-18 h-18 flex items-center justify-center text-2xl font-bold mb-8">
                {getInitials(`${profile.nom} ${profile.prenom}`)}
            </div>
            <div className="space-y-2">
                <div className="mb-2">
                    <input type="text" value={profile.nom} readOnly className='bg-[#F5F3F4] w-full p-2 text-md text-[#4A4E69] font-bold border-none outline-none' />
                </div>
                <div className="mb-2">
                    <input type="text" value={profile.prenom} readOnly className='bg-[#F5F3F4] w-full p-2 text-md text-[#4A4E69] font-bold border-none outline-none' />
                </div>
                <div className="mb-2">
                    <input type="email" value={profile.email} readOnly className='bg-[#F5F3F4] w-full p-2 text-md text-[#4A4E69] font-bold border-none outline-none' />
                </div>
            </div>
        </div>
    )
}

export default ProfilCard;
