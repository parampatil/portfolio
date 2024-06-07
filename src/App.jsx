import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import NavBar from "./components/NavBar";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="h-screen flex">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<h1>contact</h1>} />
        <Route path="about" element={<h1>About</h1>} />
      </Routes>
    </div>
  );
}

export default App;
