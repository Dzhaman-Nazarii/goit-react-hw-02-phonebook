import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  
  addContact = data => {
    const { contacts } = this.state;
    const newContact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };
    this.setState({
      contacts: [...contacts, newContact]
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
        <ContactList contacts={this.getContactsBySearch()} />
      </div>
    );
  }
}