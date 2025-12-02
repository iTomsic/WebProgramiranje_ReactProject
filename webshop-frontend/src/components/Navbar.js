import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {

    const navigate = useNavigate();

    // Check if a user is logged in (token stored)
    const isLoggedIn = !!localStorage.getItem("token");

    function handleLogout() {
        localStorage.removeItem("token");
        navigate("/login");
    }


    return (
        <nav style={{
            background: "brown",
            color: "white",
            padding: "10px 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
        }}>

            <Link to="/products" style={{ color: "white", textDecoration: "none" }}><h1>Book Webshop</h1></Link>

            <div style={{ display: "flex", gap: "30px" }}>

                <Link to="/products" style={{ color: "white", textDecoration: "none" }}>
                    <h2>Products</h2>
                </Link>

                <Link to="/about" style={{ color: "white", textDecoration: "none" }}>
                    <h2>About</h2>
                </Link>


                <Link to="/cart" style={{ color: "white", textDecoration: "none" }}>
                    <h2>Cart</h2>
                </Link>

                {!isLoggedIn && (
                    <>
                        <Link to="/register" style={{ color: "white", textDecoration: "none" }}>
                            <h2>Register</h2>
                        </Link>

                        <Link to="/login" style={{ color: "white", textDecoration: "none" }}>
                            <h2>Login</h2>
                        </Link>
                    </>
                )}

                {isLoggedIn && (
                    <button
                        onClick={handleLogout}
                        style={{
                            background: "transparent",
                            border: "1px solid white",
                            color: "white",
                            padding: "5px 15px",
                            fontSize: "18px",
                            cursor: "pointer",
                            borderRadius: "5px"
                        }}
                    >
                        Logout
                    </button>
                )}
            </div>


        </nav>

    );
}