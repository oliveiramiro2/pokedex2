import { Routes, Route } from 'react-router-dom'

import PokeCards from "./components/cards"
import Home from "./components/home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/cards" element={<PokeCards />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;