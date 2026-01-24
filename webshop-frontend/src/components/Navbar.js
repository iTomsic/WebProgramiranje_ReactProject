import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isLoggedIn = !!localStorage.getItem("token");

    function handleLogout() {
        localStorage.removeItem("token");
        navigate("/login");
        setIsMenuOpen(false);
    }

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }

    function closeMenu() {
        setIsMenuOpen(false);
    }

    return (
        <nav className="navbar">
            <Link to="/products" className="nav-logo" onClick={closeMenu}>
                <h1>Novella</h1>
            </Link>

            <button className="hamburger" onClick={toggleMenu}>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
            </button>

            <div
                className={`nav-links-container ${isMenuOpen ? "active" : ""}`}
            >
                <Link to="/products" className="nav-link" onClick={closeMenu}>
                    <h2>Products</h2>
                </Link>

                <Link to="/about" className="nav-link" onClick={closeMenu}>
                    <h2>About</h2>
                </Link>

                <Link to="/cart" className="nav-link" onClick={closeMenu}>
                    <h2>Cart</h2>
                </Link>

                {!isLoggedIn && (
                    <>
                        <Link
                            to="/register"
                            className="nav-link"
                            onClick={closeMenu}
                        >
                            <h2>Register</h2>
                        </Link>

                        <Link
                            to="/login"
                            className="nav-link"
                            onClick={closeMenu}
                        >
                            <h2>Login</h2>
                        </Link>
                    </>
                )}

                {isLoggedIn && (
                    <button onClick={handleLogout} className="logout-btn">
                        Logout
                    </button>
                )}
            </div>

            {isMenuOpen && (
                <div className="menu-overlay" onClick={closeMenu}></div>
            )}
        </nav>
    );
}
