import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchInput = () => {
  return (
    <div
      style={{
        border: "3px solid black",
        width: "500px",
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <input
        style={{
          width: "400px",
          height: "30px",
          border: "transparent",
          fontSize: "18px",
          //   padding: "0px 25px 0px 25px",
        }}
      ></input>
      <FontAwesomeIcon icon={faMagnifyingGlass} size="2xl" />
    </div>
  );
};

export default SearchInput;
