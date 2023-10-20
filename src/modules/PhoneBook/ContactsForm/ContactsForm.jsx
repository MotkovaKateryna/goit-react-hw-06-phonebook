import { useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useDispatch,useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/contacts-slice';
import { getAllContacts } from 'redux/contacts/contacts-selectors';
import inititalState from './inititalState';


import styles from './contacts-form.module.scss';


const ContactsForm = () =>{

 const [state, setState] = useState({...inititalState});
 const contacts = useSelector(getAllContacts);
 const dispatch =useDispatch();

const handleChange = ({target}) => {
    const {name,value} = target;
    setState( prevState => {
      return {...prevState, [name]: value}
    }

    )
}
const isDublicate = (name) => {
  const normalizedName = name.toLowerCase();
  const contact = contacts.find(({ name }) => {
    return name.toLowerCase() === normalizedName;
  });
  return Boolean(contact);
}

const  handleSubmit = (e) => {
  e.preventDefault();
  if (isDublicate(name)) {
    Notify.warning(` ${name} is already in contacts`);
    return false;
  }
  dispatch(addContact({name,number}));
  setState({...inititalState});
  return true;
  };


const {name,number} = state;
return (
  <form onSubmit={handleSubmit} className={styles.formGroup}>
    <div className={styles.inputWrap}>
      <label>Name</label>
      <input
        onChange={handleChange}
        type="text"
        name="name"
        value={name}
        placeholder="Add name"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </div>

    <div className={styles.inputWrap}>
      <label htmlFor="">Number</label>
      <input
        onChange={handleChange}
        type="tel"
        name="number"
        value={number}
        placeholder="Add phone number"
        pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
    </div>
    <button className={styles.btn} type="submit">
      {' '}
      Add contact{' '}
    </button>
  </form>
);
}

export default ContactsForm;

