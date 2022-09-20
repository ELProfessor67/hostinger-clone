import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Home from "./components/home/Home";

import './styles/app.scss';
import Footer from "./components/layouts/Footer";
import Login from "./components/login/Login";

function App() {
  return (
    <>
     <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      <Footer/>
     </Router>
    </>
  );
}

export default App;
