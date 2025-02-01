// src/components/ContactInfo.jsx
import { useState } from "react";
import EditContact from "./EditContact";  

function ContactInfo({ contact, onClose, onUpdate }) {
    const [editMode, setEditMode] = useState(false);

    return (
        <div className="bg-white p-6 rounded-lg flex flex-col m-auto">
            {editMode ? (
                <EditContact 
                    contact={contact} 
                    onUpdate={(updatedContact) => {
                        onUpdate(updatedContact);
                        setEditMode(false);
                    }} 
                    onCancel={() => setEditMode(false)}
                />
            ) : (
                <>
                    <h3 className="text-[#4A4E69] text-2xl text-center font-semibold mb-6">Contact info</h3>
                    
                    <div className="mb-4">
                        <label className="font-bold text-[#4A4E69] text-lg">Nom</label>
                        <p className="font-normal text-lg text-[#4A4E69]">{contact.nom}</p>
                    </div>
                    <div className="mb-4">
                        <label className="font-bold text-[#4A4E69] text-lg">Prénom</label>
                        <p className="font-normal text-lg text-[#4A4E69]">{contact.prenom}</p>
                    </div>
                    <div className="mb-4">
                        <label className="font-bold text-[#4A4E69] text-lg">Email</label>
                        <p className="font-normal text-lg text-[#4A4E69]">{contact.email}</p>
                    </div>
                    <div className="mb-4">
                        <label className="font-bold text-[#4A4E69] text-lg">Tél Num</label>
                        <p className="font-normal text-lg text-[#4A4E69]">{contact.numOne} / {contact.numTwo}</p>
                    </div>

                    <div className="flex justify-between mt-4 space-x-2">
                        <button 
                            className="bg-[#4A4E69] text-white px-4 py-1 rounded cursor-pointer"
                            onClick={() => setEditMode(true)}
                        >
                            Modifier
                        </button>
                        <button 
                            className="bg-[#4A4E69] text-white px-4 py-1 rounded cursor-pointer" 
                            onClick={onClose}
                        >
                            Fermer
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

export default ContactInfo;
