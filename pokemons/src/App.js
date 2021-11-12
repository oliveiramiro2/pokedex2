import { Routes, Route } from 'react-router-dom'

import Home from "./components/home"
import PokeCards from "./components/cards"
import InfoPoke from './components/infoPoke'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/info" element={<InfoPoke />} />
        <Route path="/cards" element={<PokeCards />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;