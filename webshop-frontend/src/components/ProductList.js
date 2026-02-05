import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ProductList.css";

export default function ProductList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [sortOption, setSortOption] = useState("");

    useEffect(() => {
        async function fetchProducts() {
            try {
                const res = await fetch("http://localhost:5000/api/products");
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

    function handleSortChange(e) {
        setSortOption(e.target.value);
    }

    const sortedProducts = [...products].sort((a, b) => {
        switch (sortOption) {
            case "price-asc":
                return a.price - b.price;
            case "price-desc":
                return b.price - a.price;
            case "name-asc":
                return a.title.localeCompare(b.title);
            case "name-desc":
                return b.title.localeCompare(a.title);
            default:
                return 0;
        }
    });

    if (loading) return <p className="productlist-status">Loading products…</p>;

    if (error) return <p className="productlist-error">Error: {error}</p>;

    return (
        <div className="productlist-container">
            <h2 className="productlist-title">Welcome to Novella!</h2>

            <div className="productlist-sort">
                <label htmlFor="sort">Sort by: </label>
                <select
                    id="sort"
                    value={sortOption}
                    onChange={handleSortChange}
                >
                    <option value="">Default</option>
                    <option value="price-asc">Price: Low → High</option>
                    <option value="price-desc">Price: High → Low</option>
                    <option value="name-asc">Name: A → Z</option>
                    <option value="name-desc">Name: Z → A</option>
                </select>
            </div>

            <div className="product-grid">
                {sortedProducts.map((p) => (
                    <Link
                        key={p._id}
                        to={`/products/${p._id}`}
                        className="product-card"
                    >
                        <img
                            src={p.image || "https://via.placeholder.com/80"}
                            alt={p.title}
                            className="product-image"
                        />
                        <div className="product-info">
                            <h4>{p.title}</h4>
                            <p className="product-price">€{p.price}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
