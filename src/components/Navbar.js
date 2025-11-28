import { Link } from "react-router-dom";

export default function Navbar() {
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

                

            </div>


        </nav>

    );
}