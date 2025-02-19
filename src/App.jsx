import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Map from "./pages/Map";
 import Detect from "./pages/Detect";
import Profile from "./pages/Profile";
import Payment from "./pages/Payment"
import Wallet from "./pages/Wallet"
 
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<Map />} />
        <Route path="/detect" element={<Detect/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path = "/payment" element={<Payment/>} />
        <Route path = "/wallet" element={<Wallet/>} />



       
      </Routes>
    </Router>
  );
};

export default App;