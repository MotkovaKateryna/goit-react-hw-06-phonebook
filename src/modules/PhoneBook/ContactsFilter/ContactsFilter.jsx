import styles from './contacts-filter.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/filter/filter-selectors';

import { setFilter } from 'redux/filter/filter-slice';

const ContactsFilter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={styles.formGroup}>
      <label htmlFor="">Find contacts by name</label>
      <input
        type="text"
        onChange={handleFilterChange}
        value={filter}
        name="filter"
        placeholder="Find contacts"
      />
    </div>
  );
};

export default ContactsFilter;