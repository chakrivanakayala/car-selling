import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import BlogList from "./pages/Blog/BlogList";
import ShopList from "./pages/Shop/ShopList";
import Signup from "./pages/Signup/Signup";
import InventoryGrid from "./pages/Inventory/Grid";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/shop" element={<ShopList />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/inventory" element={<InventoryGrid />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
