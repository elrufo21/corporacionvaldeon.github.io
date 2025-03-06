import "./App.css";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import BackgroundLights from "./components/BackgroundLights";

function App() {
  return (
    <BrowserRouter>
      <div className="relative w-full min-h-screen flex flex-col bg-black text-white">
        <NavBar />

        {/* Contenido Principal sin altura forzada */}
        <main className="flex-grow relative px-4">
          <BackgroundLights />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
