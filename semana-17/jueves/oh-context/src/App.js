import React from "react";
import "./App.css";
import { AppConsumer } from "./AppContext";

function App() {
  return (
    <AppConsumer>
      {state => <div className="App">{state.user.name}</div>}
    </AppConsumer>
  );
}

export default App;
