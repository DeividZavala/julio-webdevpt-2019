import React from "react";
import Router from "./Router";
import Nav from "./components/common/Nav";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Router />
    </div>
  );
}

export default App;
