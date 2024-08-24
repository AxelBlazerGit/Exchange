import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Sell from "./pages/Sell";
import Product from "./pages/Product";
import LoginForm from "./pages/LoginForm";
import SignUpForm from "./pages/SignUpForm";

function App() {
  return (
    <div className="bg-teal-50 min-h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/sign" element={<SignUpForm />} />
          <Route path="/sell" element={<Sell />} />
          {/* Pass the item ID to Product page dynamically */}
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
