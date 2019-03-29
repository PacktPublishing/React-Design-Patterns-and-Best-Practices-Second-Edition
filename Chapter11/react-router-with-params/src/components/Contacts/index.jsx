import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Contacts.css';

class Contacts extends Component {
  // For now we are going to add our contacts to our
  // local state, but normally this should come
  // from some service.
  state = {
    contacts: [
      {
        id: 1,
        name: 'Carlos Santana',
        email: 'carlos.santana@dev.education',
        phone: '415-307-3112'
      },
      {
        id: 2,
        name: 'John Smith',
        email: 'john.smith@dev.education',
        phone: '223-344-5122'
      },
      {
        id: 3,
        name: 'Alexis Nelson',
        email: 'alexis.nelson@dev.education',
        phone: '664-291-4477'
      }
    ]
  };

  renderSingleContact = ({ name, email, phone }) => (
    <>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>{phone}</p>
    </>
  )

  renderContacts = () => (
    <ul>
      {this.state.contacts.map((contact, key) => (
        <li key={key}>
          <Link to={`/contacts/${contact.id}`}>{contact.name}</Link>
        </li>
      ))}
    </ul>
  );


  render() {
    // Let's see what contains the match object.
    console.log(this.props);

    // We got the noteId param from match object.
    const { match: { params: { contactId } } } = this.props;
    const { contacts } = this.state;

    // By default our selectedNote is false
    let selectedContact = false;

    if (contactId > 0) {
      // If the contact id is higher than 0 then we filter it from our
      // contacts array.
      selectedContact = contacts.filter(
        contact => contact.id === Number(contactId)
      )[0];
    }

    return (
      <div className="Contacts">
        <h1>Contacts</h1>

        {/* We render our selectedContact or all the contacts */}
        {selectedContact
          ? this.renderSingleContact(selectedContact)
          : this.renderContacts()}
      </div>
    );
  }
}

export default Contacts;
