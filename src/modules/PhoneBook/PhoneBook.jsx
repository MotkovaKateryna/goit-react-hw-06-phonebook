import { useSelector } from 'react-redux';

import ContactsForm from './ContactsForm/ContactsForm';
import ContactList from './ContactList/ContactList';
import ContactsFilter from './ContactsFilter/ContactsFilter';

import {getFilteredContacts } from 'redux/contacts/contacts-selectors';

import styles from './phone-book.module.scss';

const PhoneBook = () => {
   const filteredContacts = useSelector(getFilteredContacts);
   const isContacts = Boolean(filteredContacts.length);

    return (
      <div>
        <div className={styles.wrapper}>
          <div className={styles.block}>
            <h2 className={styles.title}>Phonebook</h2>
            <ContactsForm />
          </div>
          <div className={styles.block}>
            <h2 className={styles.title}>Contacts</h2>
            <ContactsFilter/>
            {isContacts && (
              <ContactList />
            )}
            {!isContacts && <p className={styles.notif}>No contacts in list</p>}
          </div>
        </div>
      </div>
    );

}

export default PhoneBook;


