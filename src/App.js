import React from "react";
import { Fragment } from "react";

import Header from "./components/Layout/Header";
import Food from "./components/Food/Food";


function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Food />
      </main>
    </Fragment>
  );
}

export default App;
