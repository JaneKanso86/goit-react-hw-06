import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector((state) => state.contacts.items);

  const filterValue = useSelector((state) => state.filters.name);
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase()),
  );

  return (
    <ul className={css.list}>
      {filteredContacts.map((contact) => {
        return (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        );
      })}
    </ul>
  );
}
