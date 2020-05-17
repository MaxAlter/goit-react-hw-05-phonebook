import React, { Component } from "react";
import shortid from "shortid";
import { TransitionGroup } from "react-transition-group";

import ContactForm from "./components/ContactForm/contactForm";
import ContactList from "./components/ContactList/contactList";
import Filter from "./components/filter/filter";
import AlertContact from "./components/AlertComponent/AlertContact";
import PhoneBook from "./components/PhoneBook/PhoneBook";

const filterContacts = (contacts, filter) => {
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

export default class App extends Component {
  state = {
    contacts: [],
    filter: "",
    error: false,
  };

  componentDidMount() {
    const persistedTasks = localStorage.getItem("contacts");

    if (persistedTasks) {
      const contacts = JSON.parse(persistedTasks);

      this.setState({ contacts });
    }
  }

  componentDidUpdate(prevState) {
    const { contacts } = this.state;

    if (prevState.contacts !== contacts) {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    }
  }

  handleForm = (items) => {
    let addItems = this.state.contacts.find((item) => item.name === items.name);

    if (this.state.contacts.length > 0 && addItems) {
      this.setState({ error: true });
      setTimeout(() => this.setState({ error: false }), 2000);
      return false;
    } else {
      const contact = {
        id: shortid.generate(),
        name: items.name,
        number: items.number,
      };
      this.setState((prevState) => ({
        contacts: [...prevState.contacts, contact],
      }));
    }
  };

  deleteList = (id) => {
    this.setState((state) => ({
      contacts: state.contacts.filter((contact) => contact.id !== id),
    }));
  };

  handleFIlter = (e) => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const { contacts, filter, error } = this.state;
    const filterContact = filterContacts(contacts, filter);
    return (
      <TransitionGroup component={null}>
        <>
          {error && <AlertContact isActiv={error} />}
          <PhoneBook title="PhoneBook" />
          <ContactForm onHandleForm={this.handleForm} />
          <h2>Contacts</h2>
          {contacts.length >= 2 && (
            <Filter value={filter} onChangeFilter={this.handleFIlter} />
          )}
          <ContactList items={filterContact} onDeleteList={this.deleteList} />
        </>
      </TransitionGroup>
    );
  }
}
