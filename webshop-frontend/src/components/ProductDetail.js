import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchProduct() {
            try {
                setLoading(true);
                const response = await fetch(`/api/products/${id}`);

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
            <img src={product.image} alt={product.title} style={styles.image} />

            <div style={styles.infoSection}>
                <h1>{product.title}</h1>
                <p style={styles.price}>€{product.price}</p>

                <p style={styles.description}>{product.description}</p>

                <button style={styles.button}>Add to Cart</button>
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
    },
    image: {
        width: "500px",
        height: "500px",
        objectFit: "contain",
        borderRadius: "8px",
    },
    infoSection: {
        maxWidth: "500px",
    },
    price: {
        fontSize: "22px",
        fontWeight: "bold",
        margin: "10px 0",
    },
    description: {
        fontSize: "16px",
        marginBottom: "20px",
        lineHeight: "1.5",
    },
    button: {
        padding: "10px 20px",
        background: "#333",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
    },
};
