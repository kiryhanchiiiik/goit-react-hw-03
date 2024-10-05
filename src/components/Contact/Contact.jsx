import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import css from "./Contact.module.css";
const Contact = ({ name, number, id, onDeleteContact }) => {
  return (
    <li className={css.contactListItm}>
      <div>
        <p>
          <FaUser /> {name}
        </p>
        <p>
          <FaPhone /> {number}
        </p>
      </div>
      <button onClick={() => onDeleteContact(id)} type="button">
        Delete
      </button>
    </li>
  );
};

export default Contact;
