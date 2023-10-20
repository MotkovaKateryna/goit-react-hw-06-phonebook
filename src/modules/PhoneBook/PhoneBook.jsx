import { useSelector,useDispatch } from 'react-redux';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

import ContactsForm from './ContactsForm/ContactsForm';
import ContactList from './ContactList/ContactList';
import ContactsFilter from './ContactsFilter/ContactsFilter';

import {addContact} from "../../redux/contacts/contacts-slice";


import { getAllContacts, getFilteredContacts } from 'redux/contacts/contacts-selectors';

import styles from './phone-book.module.scss';


const PhoneBook = () => {
  const contacts = useSelector(getAllContacts);
  const filteredContacts = useSelector(getFilteredContacts);

const dispatch = useDispatch();

const isDublicate = (name) => {
  const normalizedName = name.toLowerCase();
  const contact = contacts.find(({ name }) => {
    return name.toLowerCase() === normalizedName;
  });
  return Boolean(contact);
}


const  onAddContact = ({ name, number }) => {
  if (isDublicate(name)) {
    Notify.warning(` ${name} is already in contacts`);
    return false;
  }
  dispatch(addContact({name,number}));
  return true;
};
   const isContacts = Boolean(filteredContacts.length);

    return (
      <div>
        <div className={styles.wrapper}>
          <div className={styles.block}>
            <h2 className={styles.title}>Phonebook</h2>
            <ContactsForm onSubmit={onAddContact} />
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


