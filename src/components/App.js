import React, { useState } from "react";
import Nav from "./Nav";
import Main from "./Main";

import hogs from "../porkers_data";

function App() {
  const [showThePigs, setShowPigs] = useState(false)

  return (
    <div className="App">
      <Nav />
      <div>
        <button onClick={() => setShowPigs(!showThePigs)}>{showThePigs ? "Hide Hogs" : "Show Hogs"}</button>
      </div>
      {showThePigs ? <Main hogsInfo={hogs} /> : null}

    </div>
  );
}

export default App;
