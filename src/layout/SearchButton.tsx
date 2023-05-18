import { Link } from "react-router-dom";
import { ImSearch } from "react-icons/im";
import classes from "./SearchButton.module.css";

const SearchButton = () => {
  return (
    <Link to="/search" className={classes["search-button"]}>
      <div>
        <ImSearch fontSize="larger" />
      </div>
    </Link>
  );
};

export default SearchButton;
