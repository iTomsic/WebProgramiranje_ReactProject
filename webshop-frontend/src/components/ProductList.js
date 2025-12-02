import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("http://localhost:5000/products");
        if (!res.ok) throw new Error("Failed to fetch products");

        const data = await res.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <div>
      <h2 style={{ color: "black" }}>Products</h2>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {products.map((p) => (
          <li key={p._id} style={{ marginBottom: "20px" }}>
            <Link
              to={`products/${p._id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "20px" }}
              >
                <img
                  src={p.image || "https://via.placeholder.com/80"}
                  alt={p.title}
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "cover",
                    borderRadius: "6px",
                  }}
                />

                <div>
                  <h4 style={{ margin: "0" }}>{p.title}</h4>
                  <p style={{ margin: "5px 0" }}>€{p.price}</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
