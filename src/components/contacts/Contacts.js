import React, { Component } from 'react';
import { connect } from 'react-redux'
import Contact from './Contact';
import { getContacts } from '../../actions/contactActions'
class Contacts extends Component {
  state = {};


  componentDidMount() {
    this.props.getContacts()
  }

  render() {
    const { contacts } = this.props;
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-danger">Contact</span> List
        </h1>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: state.contact.contacts
})

export default connect(mapStateToProps, { getContacts })(Contacts);
