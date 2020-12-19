import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ContactsContext from '../../../context/ContactsContext';

const ContactItem = ({ id, name, number }) => {
  const deleteContact = useContext(ContactsContext);

  return (
    <li>
      {name}: {number}
      {/* <ContactsContext.Consumer> */}
      {/* {deleteContact => ( */}
      <button type="button" onClick={() => deleteContact(id)}>
        Delete
      </button>
      {/* )} */}
      {/* </ContactsContext.Consumer> */}
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
