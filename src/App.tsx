import { FC } from "react";

import { Provider } from "mobx-react";

import MessageBox from "./components/Box/MessageBox";
import Layout from "./components/Main/Layout";

import allStores from "./stores/allStores";

import "./App.css";

const App: FC = () => {
  return (
    <Provider {...allStores}>
      <div className="App">
        <MessageBox />

        <Layout />
      </div>
    </Provider>
  );
};

export default App;
