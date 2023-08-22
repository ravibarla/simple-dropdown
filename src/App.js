import { useState } from "react";
import "./App.css";
import Lists from "./Lists";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min"; // Import Bootstrap JS
function App() {
  //Dropdown lists
  const [ListItem] = useState([
    "Delhi",
    "Jharkhand",
    "Chattisgarh",
    "Bihar",
    "Rajasthan",
  ]);
  //selected list
  const [stateSelected, setStateSelection] = useState("");
  //logic when to display the drop down item
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  //handle function when to display dropdown
  const handleMouseOver = () => setDropdownOpen(true);
  //handle function when to close dropdown
  const handleMouseOut = (state) => {
    setStateSelection(state);
    setDropdownOpen(false);
  };
  return (
    <div className="App">
      <div
        className={`dropdown ${isDropdownOpen ? "show" : ""} mt-5`}
        onMouseOver={handleMouseOver}
      >
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-toggle="dropdown"
          id="hoverDropdownToggleButton"
          aria-haspopup="true"
          aria-expanded={isDropdownOpen ? "true" : "false"}
        >
          select state
        </button>
        <div
          className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}
          aria-labelledby="hoverDropdownToggleButton"
        >
          <Lists ListItem={ListItem} handleMouseOut={handleMouseOut} />
        </div>
      </div>
      <div className="mt-5">{stateSelected}</div>
    </div>
  );
}

export default App;
