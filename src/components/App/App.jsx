import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

export default class App extends Component {
  state = {
    contacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }
    ],
    filter: '',
  };
  
  addContact = (data) => {
    const { contacts } = this.state;
    const existingContact = contacts.find((contact) => contact.name.toLowerCase() === data.name.toLowerCase());
    
    if (existingContact) {
      alert('A contact with this name already exists!');
    } else {
      const newContact = {
        id: nanoid(),
        name: data.name,
        number: data.number,
      };
      
      this.setState({
        contacts: [...contacts, newContact]
      });
    }
  };

  deleteContact = (id) => {
    const { contacts } = this.state;
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    this.setState({
      contacts: updatedContacts
    });
  };

  onChange = (filter) => {
    this.setState({ filter });
  };

  getContactsBySearch = () => {
    const normalizedSearch = this.state.filter.toLowerCase();
    const filteredItems = this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedSearch)
    );
    return filteredItems;
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter onChange={this.onChange} />
        <ContactList contacts={this.getContactsBySearch()} onDelete={this.deleteContact} />
      </div>
    );
  }
}
