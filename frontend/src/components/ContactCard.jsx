// import React from 'react'

import { getInitials } from "../utils/helper"

function ContactCard({nom, prenom, onSelect}) {
    return (
        <div className="bg-white rounded-lg p-2 shadow-md flex flex-col items-center">
            <div className="bg-[#4A4E69] text-white rounded-xl w-8 h-8 flex items-center justify-center">
            {getInitials(`${nom}`)}
            </div>
            <p className='text-sm font-semibold text-[#4A4E69]'>{nom}</p>
            <p className='text-sm font-semibold text-[#4A4E69]'>{prenom}</p>
            <button className="mt-2 bg-[#4A4E69] text-white px-4 py-1 rounded cursor-pointer" onClick={onSelect} >Voir +</button>
        </div>
    )
}

export default ContactCard;
