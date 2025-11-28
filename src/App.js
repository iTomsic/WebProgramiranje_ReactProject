import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import About from "./components/About";
import Cart from "./components/Cart";
import ProductDetail from "./components/ProductDetail";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (


    <Router>
      <Navbar />
      <main style={{ padding: "20px" }}>


        <Routes>
          <Route path="/products" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          <Route path="/products/:id" element={<ProductDetail />} />

        </Routes>

      </main>

    </Router>
  );
}

export default App;
