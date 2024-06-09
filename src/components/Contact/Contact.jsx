import { HiPhone } from 'react-icons/hi';
import { HiUser } from 'react-icons/hi';

import css from './Contact.module.css';

export default function Contact({ contact: { id, name, number }, onDelete }) {
  return (
    <div className={css.mainContainer}>
      <ul>
        <li>
          <p className={css.contactItem}>
            <HiUser className={css.icon} />
            {name}
          </p>
        </li>
        <li>
          <p className={css.contactItem}>
            <HiPhone className={css.icon} />
            {number}
          </p>
        </li>
      </ul>

      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}
