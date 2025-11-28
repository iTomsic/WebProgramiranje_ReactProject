import { Link } from "react-router-dom";
import products from "../data/products";

export default function ProductList() {

    return (

        <div>
            <h3>Products</h3>

            <ul style={{ listStyle: "none", padding: 0 }}>
                {products.map((p) => (

                    <li key={p.id} style={{ marginBottom: "20px" }}>
                        <Link to={`/products/${p.id}`} style={{ textDecoration: "none", color: "black" }}>

                            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                                <img src={p.image} alt={p.name} style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "6px" }} />

                                <div>
                                    <h4 style={{ margin: "0" }}>{p.name}</h4>
                                    <p style={{ margin: "5px 0" }}>${p.price}</p>
                                </div>

                            </div>

                        </Link>
                    </li>
                ))}
            </ul>
        </div>

    );
}