import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "./CartContext"; // Add this import

function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { addToCart } = useCart(); // Add this line

    useEffect(() => {
        async function fetchProduct() {
            try {
                setLoading(true);
                const response = await fetch(
                    `http://localhost:5000/api/products/${id}`,
                ); // Fixed URL

                if (!response.ok) {
                    throw new Error("Failed to fetch product");
                }

                const data = await response.json();
                setProduct(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchProduct();
    }, [id]);

    if (loading) return <div>Loading product...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!product) return <div>Product not found.</div>;

    return (
        <div style={styles.container}>
            <img
                src={product.image || "https://via.placeholder.com/500"}
                alt={product.title}
                style={styles.image}
            />

            <div style={styles.infoSection}>
                <h1>{product.title}</h1>
                <p style={styles.author}>
                    by {product.author || "Unknown Author"}
                </p>
                <p style={styles.price}>€{product.price}</p>

                <p style={styles.description}>{product.description}</p>

                <button
                    style={styles.button}
                    onClick={() => {
                        addToCart(product);
                        alert(`Added ${product.title} to cart!`);
                    }}
                    className="add-to-cart-btn"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

export default ProductDetail;

const styles = {
    container: {
        display: "flex",
        gap: "40px",
        marginTop: "20px",
        alignItems: "flex-start",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "20px",
    },
    image: {
        width: "400px",
        height: "500px",
        objectFit: "contain",
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    },
    infoSection: {
        flex: 1,
        maxWidth: "600px",
    },
    author: {
        fontSize: "18px",
        color: "#666",
        margin: "10px 0",
    },
    price: {
        fontSize: "24px",
        fontWeight: "bold",
        color: "#e74c3c",
        margin: "15px 0",
    },
    description: {
        fontSize: "16px",
        marginBottom: "30px",
        lineHeight: "1.6",
        color: "#555",
    },
    button: {
        padding: "15px 30px",
        background: "#3498db",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "16px",
        fontWeight: "bold",
        minWidth: "200px",
    },
};
