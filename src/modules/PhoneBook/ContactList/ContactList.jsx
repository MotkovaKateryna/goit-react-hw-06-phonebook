import { useDispatch, useSelector } from 'react-redux';
import { memo } from 'react';

import styles from './contact-list.module.scss';
import {getFilteredContacts } from 'redux/contacts/contacts-selectors';
import {deleteContact} from "redux/contacts/contacts-slice";

const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getFilteredContacts).map(({ id, name, number }) => (
    <li className={styles.item} key={id}>
      {name}: {number}{' '}
      <button
        className={styles.btn}
        onClick={() => dispatch(deleteContact(id))}
        type="button"
      >
        Delete
      </button>
    </li>
  ));
  return <ol className={styles.list}>{contacts}</ol>;
};

export default memo(ContactList);

