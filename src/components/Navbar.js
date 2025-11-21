import { Link } from "react-router-dom";

export default function Navbar() {
    return(
        <nav style={{
            background: "black",
            color: "white",
            padding: "10px 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
        }}>
    
            <h2 style={{ margin: 0}}>My Webshop</h2>

            <div syle={{display: "flex", gap:"20px"}}>

                <Link to="/products" style={{color: "white", textDecoration: "none"}}>
                Products ||  
                </Link>

                <Link to="/cart" style={{color: "white", textDecoration: "none"}}>
                Cart  
                </Link>

            </div>


        </nav>

    );
}