import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from './pages/Home'
import Login from "./pages/Login";
import Sell from "./pages/Sell";

function App() {
  return (
    <div className="bg-teal-50">
    <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/sell" element={<Sell/>} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
