import React from "react";
import ShowGear from "./components/ShowGear";
import AppTitle from "./components/AppTitle";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppTitle />
      </header>
      <ShowGear />
    </div>
  );
}

export default App;
