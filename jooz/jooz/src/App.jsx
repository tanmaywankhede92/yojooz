import { Route, Routes } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage";
import AboutSection from "./pages/About";
import GallerySection from "./pages/Gallary";
import ContactSection from "./pages/Contact";
import Scoll from "./components/ui/Scoll";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/gallery" element={<GallerySection />} />
        <Route path="/contact" element={<ContactSection />} />
      </Routes>
      <Scoll />
    </>
  );
}

export default App;
