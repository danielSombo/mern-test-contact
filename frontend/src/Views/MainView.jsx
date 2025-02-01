// App.jsx
import { useState } from "react";
import ContactCard from "../components/ContactCard";
import ContactInfo from "../components/ContactInfo";
import ProfilCard from "../components/ProfilCard";
import { FaSearch } from "react-icons/fa";
import ContactForm from "../components/ContactForm";

function MainView() {
  const profile = { nom: "Sombo", prenom: "Daniel", email: "daniel@gmail.com" };
  const contacts = Array(24).fill({ 
    nom: "Sombo", 
    prenom: "Daniel", 
    email: "dani@gmail.com",
    numOne: "01 53 85 28 01", 
    numTwo: "01 72 10 99 04" 
  });

  const [selectedContact, setSelectedContact] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleUpdateContact = (updatedContact) => {
    setSelectedContact(updatedContact);
  };

  const handleShowForm = () => {
    setShowForm(true);
    setSelectedContact(null);
  };

  const handleSelectContact = (contact) => {
    setSelectedContact(contact);
    setShowForm(false);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar gauche */}
      <div className="bg-[#4A4E69] w-1/4 flex flex-col items-center p-12">
        <ProfilCard profile={profile} />
      </div>

      {/* Contenu principal */}
      <div className="bg-white w-1/2 p-6">
        <h2 className="text-center text-xl font-bold text-[#4A4E69] mb-4">Mes contacts</h2>
        {/* Barre de recherche et filtre */}
        <div className="flex justify-center items-center mx-4 space-x-4 mb-14">
          <div className="flex justify-between items-center bg-[#F5F3F4] px-2 w-2/3 rounded-lg">
            <input 
              type="search" 
              placeholder="Chercher..." 
              className="w-full p-2 border-none outline-none bg-transparent"
            />
            <FaSearch className="text-[#4A4E69]" />
          </div>
          <div>
            <select className="p-2 border-none outline-none rounded bg-[#F5F3F4]" defaultValue="Alphabet">
              <option value="Alphabet" disabled>Alphabet</option>
              <option value="A">A</option>
              <option value="L">L</option>
              <option value="Z">Z</option>
            </select>
          </div>
        </div>

        {/* Liste des contacts */}
        <div className="grid grid-cols-3 gap-6 max-h-[500px] overflow-y-auto p-2">
          {contacts.map((contact, index) => (
            <ContactCard 
              key={index} 
              {...contact} 
              onSelect={() => handleSelectContact(contact)} 
            />
          ))}
        </div>
      </div>

      {/* Sidebar droite */}
      <div className="bg-[#4A4E69] w-1/4 flex flex-col items-center p-4">
        {!showForm && !selectedContact && (
          <button 
            className="bg-white text-[#4A4E69] py-2 px-4 rounded-lg mt-2 cursor-pointer"
            onClick={handleShowForm}
          >
            Ajouter un contact
          </button>
        )}
        
        {showForm && <ContactForm onClose={() => setShowForm(false)} />}
        {selectedContact && (
          <ContactInfo 
            contact={selectedContact} 
            onClose={() => setSelectedContact(null)} 
            onUpdate={handleUpdateContact}
          />
        )}
      </div>
    </div>
  );
}

export default MainView;