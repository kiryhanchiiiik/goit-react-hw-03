import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Contacts from "../Contacts.json";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import "./App.css";
import { HiDevicePhoneMobile } from "react-icons/hi2";
function App() {
  const [contacts, setContacts] = useState(() => {
    const stringifiedContacts = localStorage.getItem("contacts");
    const parsedContacts = stringifiedContacts
      ? JSON.parse(stringifiedContacts)
      : Contacts;

    return parsedContacts;
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const stringifiedContacts = JSON.stringify(contacts);
    localStorage.setItem("contacts", stringifiedContacts);
  }, [contacts]);

  const addContact = (newContact) => {
    const finalContact = {
      ...newContact,
      id: nanoid(),
    };
    setContacts((prev) => [...prev, finalContact]);
  };

  const onDeleteContact = (ContactId) => {
    const updatedContacts = contacts.filter(
      (contact) => contact.id !== ContactId
    );

    setContacts(updatedContacts);
  };

  const filterContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div>
      <h1>
        {" "}
        <HiDevicePhoneMobile />
        Phonebook
      </h1>
      <ContactForm addContact={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList
        contacts={filterContacts}
        onDeleteContact={onDeleteContact}
      />
    </div>
  );
}

export default App;
