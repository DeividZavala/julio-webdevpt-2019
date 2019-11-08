import React from "react";
import "./App.css";
import Home from "./Component/Home";
import Profile from "./Component/Profile";

function App() {
  return (
    <div className="App">
      <div>
        <Home />
      </div>
      <div>
        <Profile />
      </div>
    </div>
  );
}

export default App;
