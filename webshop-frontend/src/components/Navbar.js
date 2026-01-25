import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const checkUser = () => {
            const userData = localStorage.getItem("user");
            if (userData) {
                try {
                    setUser(JSON.parse(userData));
                } catch (error) {
                    console.error("Error parsing user data:", error);
                    setUser(null);
                }
            } else {
                setUser(null);
            }
        };

        checkUser();

        const handleStorageChange = (e) => {
            if (e.key === "user") {
                checkUser();
            }
        };

        window.addEventListener("storage", handleStorageChange);

        const interval = setInterval(checkUser, 1000);

        return () => {
            window.removeEventListener("storage", handleStorageChange);
            clearInterval(interval);
        };
    }, []);

    function handleLogout() {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
        navigate("/login");
        setIsMenuOpen(false);

        window.dispatchEvent(new Event("storage"));
    }

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }

    function closeMenu() {
        setIsMenuOpen(false);
    }

    return (
        <nav className="navbar">
            <Link to="/" className="nav-logo" onClick={closeMenu}>
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

                <div className="auth-links-container">
                    {user ? (
                        <>
                            <div className="user-info">
                                <span className="welcome-text">
                                    Welcome,{" "}
                                    <span className="username">
                                        {user.username}
                                    </span>
                                </span>
                            </div>
                            <button
                                className="nav-button logout-button"
                                onClick={() => {
                                    handleLogout();
                                    closeMenu();
                                }}
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
                                <h2>Login</h2>
                            </Link>
                            <Link
                                to="/register"
                                className="nav-link register-link"
                                onClick={closeMenu}
                            >
                                <h2>Register</h2>
                            </Link>
                        </>
                    )}
                </div>
            </div>

            {isMenuOpen && (
                <div className="menu-overlay" onClick={closeMenu}></div>
            )}
        </nav>
    );
}
