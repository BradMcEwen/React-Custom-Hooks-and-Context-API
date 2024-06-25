import React, { useContext } from 'react';
import ContactContext from '../context/ContactContext';

const ContactDetails = () => {
  const { selectedContact } = useContext(ContactContext);

  if (!selectedContact) {
    return <div>Select a contact to see the details</div>;
  }

  return (
    <div>
      <h2>Contact Details</h2>
      <p>Name: {selectedContact.name}</p>
      <p>Phone: {selectedContact.phone}</p>
    </div>
  );
};

export default ContactDetails;