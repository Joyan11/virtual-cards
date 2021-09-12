/** @format */

import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import { AllCards } from "./pages/AllCards";
import { YourCard } from "./pages/YoursCard";
import { BlockedCards } from "./pages/BlockedCards";

function App() {
  return (
    <div className="App">
      <main className="h-screen overflow-x-hidden overflow-y-scroll">
        <Navbar />
        <Routes>
          <Route path="/" element={<AllCards />} />
          <Route path="/mycards" element={<YourCard />} />
          <Route path="/blockedcards" element={<BlockedCards />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
