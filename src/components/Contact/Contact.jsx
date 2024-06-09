import { HiPhone } from 'react-icons/hi';
import { HiUser } from 'react-icons/hi';

import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

import css from './Contact.module.css';

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  const handleDeleteContact = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div className={css.mainContainer}>
      <ul>
        <li>
          <p className={css.contactItem}>
            <HiUser className={css.icon} />
            {contact.name}
          </p>
        </li>
        <li>
          <p className={css.contactItem}>
            <HiPhone className={css.icon} />
            {contact.number}
          </p>
        </li>
      </ul>

      <button onClick={handleDeleteContact}>Delete</button>
    </div>
  );
}
