import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Map from "./pages/Map";
 import Detect from "./pages/Detect";
import Profile from "./pages/Profile";
 import Wallet from "./pages/Wallet"
import ConvertPoints from "./pages/ConvertPoints";
 
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<Map />} />
        <Route path="/detect" element={<Detect/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path = "/convert-points" element={<ConvertPoints/>} />
        <Route path = "/points" element={<Wallet/>} />



       
      </Routes>
    </Router>
  );
};

export default App;