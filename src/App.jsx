import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Properties from "./pages/Properties";
import Agents from "./pages/Agents";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/properties" element={<About />} />
        <Route path="/agents" element={<About />} />
        <Route path="/faq" element={<About />} />
        <Route path="/contact" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
