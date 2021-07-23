import React from "react";
import Nav from "./Nav";
import Main from "./Main";

import hogs from "../porkers_data";

function App() {
  return (
    <div className="App">
      <Nav />

      <Main hogsInfo={hogs} />
    </div>
  );
}

export default App;
