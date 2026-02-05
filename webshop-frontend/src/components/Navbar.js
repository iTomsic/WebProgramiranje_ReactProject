import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCart } from "./CartContext";
import { useAuth } from "./AuthContext";
import "./Navbar.css";

export default function Navbar() {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { cartCount } = useCart();
    const { user, logout } = useAuth();

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const handleLogout = () => {
        logout();
        navigate("/login");
        closeMenu();
    };

    return (
        <nav className="navbar">
            <Link to="/" className="nav-logo" onClick={closeMenu}>
                <h1>Novella</h1>
            </Link>

            <button
                className="hamburger"
                onClick={toggleMenu}
                aria-label="Toggle navigation menu"
                aria-expanded={isMenuOpen}
            >
                <span className="hamburger-line" />
                <span className="hamburger-line" />
                <span className="hamburger-line" />
            </button>

            <div
                className={`nav-links-container ${isMenuOpen ? "active" : ""}`}
            >
                <Link to="/products" className="nav-link" onClick={closeMenu}>
                    Products
                </Link>

                <Link to="/about" className="nav-link" onClick={closeMenu}>
                    About
                </Link>

                <Link
                    to="/cart"
                    className="nav-link cart-link"
                    onClick={closeMenu}
                >
                    Cart{" "}
                    {cartCount > 0 && (
                        <span className="cart-badge">{cartCount}</span>
                    )}
                </Link>

                <div className="auth-links-container">
                    {user ? (
                        <>
                            <span className="welcome-text">
                                Welcome,{" "}
                                <span className="username">
                                    {user.username ?? "User"}
                                </span>
                            </span>

                            <button
                                className="nav-button logout-button"
                                onClick={handleLogout}
                            >
                                <h2>Logout</h2>
                            </button>
                        </>
                    ) : (
                        <>
                            <Link
                                to="/login"
                                className="nav-link"
                                onClick={closeMenu}
                            >
                                Login
                            </Link>
                            <Link
                                to="/register"
                                className="nav-link"
                                onClick={closeMenu}
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </div>

            {isMenuOpen && <div className="menu-overlay" onClick={closeMenu} />}
        </nav>
    );
}
