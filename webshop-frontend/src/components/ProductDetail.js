import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "./CartContext";
import { useAuth } from "./AuthContext";
import "./ProductDetail.css";

function ProductDetail() {
    const { id } = useParams();
    const navigate = useNavigate();

    const { user } = useAuth();
    const { addToCart } = useCart();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [showNotification, setShowNotification] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState("");

    useEffect(() => {
        async function fetchProduct() {
            try {
                setLoading(true);
                const response = await fetch(
                    `http://localhost:5000/api/products/${id}`,
                );

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

    const handleAddToCart = () => {
        if (!user) {
            navigate("/login");
            return;
        }

        addToCart(product, 1);

        setNotificationMessage(`Added ${product.title} to cart!`);
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 3000);
    };

    if (loading) return <div>Loading product...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!product) return <div>Product not found.</div>;

    return (
        <div className="product-detail-container">
            <img
                src={product.image || "https://via.placeholder.com/500"}
                alt={`Cover of ${product.title}`}
                className="product-detail-image"
            />

            <div className="product-detail-info">
                <h1>{product.title}</h1>
                <p className="product-detail-author">
                    by {product.author || "Unknown Author"}
                </p>
                <p className="product-detail-price">€{product.price}</p>

                <p className="product-detail-description">
                    {product.description}
                </p>

                <button className="add-to-cart-btn" onClick={handleAddToCart}>
                    {user ? "Add to Cart" : "Login to add to cart"}
                </button>
            </div>

            {showNotification && (
                <div className="notification-toast">{notificationMessage}</div>
            )}
        </div>
    );
}

export default ProductDetail;
