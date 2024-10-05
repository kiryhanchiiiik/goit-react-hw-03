import { FaUsersViewfinder } from "react-icons/fa6";
import css from "./SearchBox.module.css";
const SearchBox = ({ value, onFilter }) => {
  return (
    <div>
      <p>
        <FaUsersViewfinder /> Find contacts by name
      </p>
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={(event) => onFilter(event.target.value)}
      />
    </div>
  );
};

export default SearchBox;
