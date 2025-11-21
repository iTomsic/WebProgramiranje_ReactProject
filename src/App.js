import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  return (
    <div>
      <Navbar />
      <main style={{ padding: "20px" }}>
      <ProductList />
      <Cart />
      </main>
    </div>
  );
}

export default App;
