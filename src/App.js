import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import ContactsContext from './context/ContactsContext';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const deleteContact = contactId => {
    setContacts(contacts => {
      return [...contacts.filter(contact => contact.id !== contactId)];
    });
  };

  useEffect(() => {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));

    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addNewContact = ({ name, number }, { setSubmitting, resetForm }) => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      )
    ) {
      alert(`${name} is already in contacts.`);
      resetForm({ name, number });
      setSubmitting(false);
      return;
    }

    setContacts(state => {
      return [...state, { id: uuidv4(), name, number }];
    });

    resetForm({ name, number });
    setSubmitting(false);
  };

  const handleFindInputChange = event => setFilter(event.currentTarget.value);

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  return (
    <ContactsContext.Provider value={deleteContact}>
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm handleFormSubmit={addNewContact} />
        <h2>Contacts</h2>
        <Filter value={filter} handleInputChange={handleFindInputChange} />
        <ContactList contacts={getVisibleContacts()} />
      </div>
    </ContactsContext.Provider>
  );
};

export default App;
