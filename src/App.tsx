import React from "react";

import { Provider } from "mobx-react";

import Dropdown from "./components/Dropdown";
import allStores from "./stores/allStores";

import "./App.css";

function App() {
  return (
    <Provider {...allStores}>
      <div className="App">
        <header className="App-header">
          <Dropdown />
        </header>
      </div>
    </Provider>
  );
}

export default App;
