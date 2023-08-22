import { useState } from "react";
import "./App.css";
import Lists from "./Lists";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min"; // Import Bootstrap JS
// import './DropdownExample.css';
function App() {
  const [ListItem] = useState([
    "Delhi",
    "Jharkhand",
    "Chattisgarh",
    "Bihar",
    "Rajasthan",
  ]);
  const [stateSelected, setStateSelection] = useState("");
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const handleMouseOver = () => setDropdownOpen(true);
  const handleMouseOut = (state) => {
    console.log("state :", state);
    setStateSelection(state);
    setDropdownOpen(false);
  };
  return (
    <div className="App">
      <div
        className={`dropdown ${isDropdownOpen ? "show" : ""}`}
        onMouseOver={handleMouseOver}
        // onMouseOut={handleMouseOut}
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
      <div>{stateSelected}</div>
    </div>
  );
}

export default App;
