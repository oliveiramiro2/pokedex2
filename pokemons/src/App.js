import React from "react"

import Header from "./components/header";
import PokeCards from "./components/cards";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <PokeCards />
      </header>
    </div>
  );
}

export default App;
