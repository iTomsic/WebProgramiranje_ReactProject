import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import About from "./components/About";
import Cart from "./components/Cart";
import { CartProvider } from "./components/CartContext";
import ProductDetail from "./components/ProductDetail";
import Register from "./components/Register";
import Login from "./components/Login";
import ErrorBoundary from "./components/ErrorBoundary";
import { AuthProvider } from "./components/AuthContext";

function App() {
    return (
        <ErrorBoundary>
            <Router>
                <AuthProvider>
                    <CartProvider>
                        <Navbar />
                        <main>
                            <Routes>
                                <Route
                                    path="/"
                                    element={
                                        <Navigate to="/products" replace />
                                    }
                                />
                                <Route
                                    path="/products"
                                    element={<ProductList />}
                                />
                                <Route path="/cart" element={<Cart />} />
                                <Route path="/about" element={<About />} />
                                <Route
                                    path="/register"
                                    element={<Register />}
                                />
                                <Route path="/login" element={<Login />} />
                                <Route
                                    path="/products/:id"
                                    element={<ProductDetail />}
                                />
                                <Route
                                    path="*"
                                    element={
                                        <Navigate to="/products" replace />
                                    }
                                />
                            </Routes>
                        </main>
                    </CartProvider>
                </AuthProvider>
            </Router>
        </ErrorBoundary>
    );
}

export default App;
