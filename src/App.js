import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  return (
    
    
    <Router>

      <Navbar />
      <main style={{ padding: "20px" }}>


      <Routes>
      <Route path="/products" element={<ProductList />} />
      <Route path="/cart" element={<Cart />} />
      </Routes>

      </main>

    </Router>
  );
}

export default App;
