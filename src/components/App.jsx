import React, { useEffect, useState } from 'react';
import { GlobalStyle } from 'components/Globalstyle.js';
import { Layout, Header, MainHeader } from './Layout.js';
import { ContactsForm } from 'components/ContactsForm/ContactsForm.jsx';
import { ContactList } from 'components/ContactList/ContactList.jsx';
import { Filter } from 'components/Filter/Filter.jsx';
import initialContacts from '../contacts.json';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem('contacts')) ?? initialContacts
    );
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    contacts.filter(contact => contact.name === newContact.name).length
      ? alert(`${newContact.name}: is already in contacts`)
      : setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const changeFilter = event => {
    return setFilter(event.currentTarget.value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const filteredContacts = getFilteredContacts();
  return (
    <Layout>
      <GlobalStyle />
      <MainHeader>Phonebook</MainHeader>
      <ContactsForm onSubmit={addContact} />
      <Header>Contacts</Header>
      <Filter onChange={changeFilter} value={filter}></Filter>
      {contacts.length > 0 && (
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={deleteContact}
        ></ContactList>
      )}
    </Layout>
  );
};
