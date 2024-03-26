import { FC } from "react";

import { Provider } from "mobx-react";

import Dropdown from "./components/Dropdown";
import MessageBox from "./components/Box/MessageBox";

import allStores from "./stores/allStores";

import "./App.css";

const App: FC = () => {
  return (
    <Provider {...allStores}>
      <div className="App">
        <header className="App-header">
          <MessageBox />

          <Dropdown />
        </header>
      </div>
    </Provider>
  );
};

export default App;
