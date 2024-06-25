import { useState } from 'react';
import ContactList from './components/ContactList';
import ContactDetails from './components/ContactDetails';
import ContactContext from './context/ContactContext';



function App() {
  const dummyContacts = [
    { id: 1, name: "Brad", phone: "1234567890" },
    { id: 2, name: "Spencer", phone: "1212121212" },
    { id: 3, name: "Caleb", phone: "0987654321" },
    { id: 4, name: "Greyson", phone: "5432112345" },
  ];
  const [contacts] = useState(dummyContacts);
  const [selectedContact, setSelectedContact] = useState({ name: '', phone: ''});

  return (
    <ContactContext.Provider value ={{contacts, selectedContact, setSelectedContact}}>

    <ContactList />
    <ContactDetails />

    </ContactContext.Provider>
  )

}

export default App
