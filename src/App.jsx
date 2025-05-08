import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import ThankYou from "./Home/ThankYou";
import { Toaster } from "./Home/components/Toaster";

function App() {
  return (
    <Router>
      <Toaster /> {/* Toaster should be outside the routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </Router>
  );
}

export default App;
