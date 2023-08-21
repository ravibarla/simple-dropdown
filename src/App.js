import { useState } from "react";
import "./App.css";
import Lists from "./Lists";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min"; // Import Bootstrap JS
// import './DropdownExample.css';
function App() {
  const [ListItem] = useState(["Male", "FEMALE"]);

  return (
    <div className="App">
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          
        >
          select Gender
        </button>
        <ul className="dropdown-menu">
          <Lists ListItem={ListItem} />
        </ul>
      </div>
    </div>
  );
}

export default App;
