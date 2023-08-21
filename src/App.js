import { useState } from "react";
import "./App.css";
import Lists from "./Lists";

function App() {
  const [ListItem, setListItem] = useState(["Male", "FEMALE"]);

  return (
    <div className="App">
      <h1>select Gender</h1>
      <Lists ListItem={ListItem} />
    </div>
  );
}

export default App;
