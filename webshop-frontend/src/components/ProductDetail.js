import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import products from "../data/products";

function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const foundProduct = products.find((p) => p.id.toString() === id);
        setProduct(foundProduct);
    }, [id]);

    if (!product) {
        return <div>Loading product...</div>;
    }

    return (
        <div style={styles.container}>
            <img src={product.image} alt={product.name} style={styles.image} />

            <div style={styles.infoSection}>
                <h1>{product.name}</h1>
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
    }
};
