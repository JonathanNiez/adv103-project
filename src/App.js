import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container-fluid">
      <NavBar />
      <h1 className="page-name text-danger text-center">Charles Free Movies</h1>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
