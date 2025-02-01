// src/components/EditContact.jsx
import { useState } from "react";

function EditContact({ contact, onUpdate, onCancel }) {
    const [editedContact, setEditedContact] = useState({ ...contact });

    const handleChange = (e) => {
        setEditedContact({ ...editedContact, [e.target.name]: e.target.value });
    };

    return (
        <div className=" p-6 rounded-lg flex flex-col m-auto">
            <h3 className="text-[#4A4E69] text-2xl text-center font-semibold mb-6">Modifier le contact</h3>

            <div className="mb-4">
                <label className="font-bold text-[#4A4E69] text-lg">Nom</label>
                <input 
                    type="text" 
                    name="nom"
                    value={editedContact.nom}
                    onChange={handleChange}
                    className="bg-[#F5F3F4] w-full p-2 text-md text-[#4A4E69] font-semibold border-none outline-none"
                />
            </div>
            <div className="mb-4">
                <label className="font-bold text-[#4A4E69] text-lg">Prénom</label>
                <input 
                    type="text" 
                    name="prenom"
                    value={editedContact.prenom}
                    onChange={handleChange}
                    className="bg-[#F5F3F4] w-full p-2 text-md text-[#4A4E69] font-semibold border-none outline-none"
                />
            </div>
            <div className="mb-4">
                <label className="font-bold text-[#4A4E69] text-lg">Email</label>
                <input 
                    type="email" 
                    name="email"
                    value={editedContact.email}
                    onChange={handleChange}
                    className="bg-[#F5F3F4] w-full p-2 text-md text-[#4A4E69] font-semibold border-none outline-none"
                />
            </div>
            <div className="mb-4">
                <label className="font-bold text-[#4A4E69] text-lg">Tél Num</label>
                <input 
                    type="text" 
                    name="numOne"
                    value={editedContact.numOne}
                    onChange={handleChange}
                    className="bg-[#F5F3F4] w-full p-2 text-md text-[#4A4E69] font-semibold border-none outline-none mb-2"
                />
                <input 
                    type="text" 
                    name="numTwo"
                    value={editedContact.numTwo}
                    onChange={handleChange}
                    className="bg-[#F5F3F4] w-full p-2 text-md text-[#4A4E69] font-semibold border-none outline-none"
                />
            </div>

            <div className="flex justify-between mt-4 space-x-2">
                <button 
                    className="bg-[#4A4E69] text-white px-4 py-1 rounded cursor-pointer"
                    onClick={() => onUpdate(editedContact)}
                >
                    Valider
                </button>
                <button 
                    className="bg-[#4A4E69] text-white px-4 py-1 rounded cursor-pointer"
                    onClick={onCancel}
                >
                    Annuler
                </button>
            </div>
        </div>
    );
}

export default EditContact;
