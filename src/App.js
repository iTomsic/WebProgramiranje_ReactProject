import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (


    <Router>
      <Navbar />
      <main style={{ padding: "20px" }}>


        <Routes>
          <Route path="/products" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="/products/:id" element={<ProductDetail />} />

        </Routes>

      </main>

    </Router>
  );
}

export default App;
