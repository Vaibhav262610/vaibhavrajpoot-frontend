"use client"; // This might not be necessary; see notes below

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import SideIcons from "@/components/SideIcons";
import Whyme from "@/components/Whyme";
import Work from "@/components/Work";
import NotFound from "@/components/NotFound";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/whyme" element={<Whyme />} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>
      <SideIcons />
    </Router>
  );
}

// Home component for the main content
function Home() {
  return (
    <>
      <About />
      <Work />
      <Whyme />
      <Contact />
    </>
  );
}
