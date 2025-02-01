// import React from 'react'

function ContactForm({onClose}) {
    return (
        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md flex flex-col justify-center items-center m-auto">
            <h3 className="font-semibold mb-6 text-[#4A4E69] text-center text-xl">Ajouter un contact</h3>
            <div className="space-y-2">
                <div className="mb-2">
                    <input type="text" className='bg-[#F5F3F4] w-full p-2 text-md text-[#4A4E69] font-semibold border-none outline-none' placeholder="Nom" />
                </div>
                <div className="mb-2">
                    <input type="text" className='bg-[#F5F3F4] w-full p-2 text-md text-[#4A4E69] font-semibold border-none outline-none' placeholder="Prénom" />
                </div>
                <div className="mb-2">
                    <input type="email" className='bg-[#F5F3F4] w-full p-2 text-md text-[#4A4E69] font-semibold border-none outline-none' placeholder="Adresse email" />
                </div>
                <div className="mb-2">
                    <input type="text" className='bg-[#F5F3F4] w-full p-2 text-md text-[#4A4E69] font-semibold border-none outline-none' placeholder="Num de Téléphone 1" />
                </div>
                <div className="mb-2">
                    <input type="text" className='bg-[#F5F3F4] w-full p-2 text-md text-[#4A4E69] font-semibold border-none outline-none' placeholder="Num de Téléphone 2" />
                </div>
            </div>
            <div className="flex justify-between mt-4 space-x-4">
                <button className="bg-[#4A4E69] text-white px-4 py-1 rounded cursor-pointer">Enregistrer</button>
                <button className="bg-[#4A4E69] text-white px-4 py-1 rounded cursor-pointer" onClick={onClose}>Annuler</button>
            </div>
        </div>
    )
}

export default ContactForm
