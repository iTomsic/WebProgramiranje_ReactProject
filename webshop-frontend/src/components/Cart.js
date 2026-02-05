import { useCart } from "./CartContext";
import { Link, Navigate } from "react-router-dom";
import "./Cart.css";

export default function Cart() {
    const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();

    const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    const cartTotal = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0,
    );

    if (cartItems.length === 0) {
        return (
            <div className="cart-empty">
                <h2>Your Cart is Empty</h2>
                <p>Add some books to get started!</p>
                <Link to="/products" className="btn-primary">
                    Browse Products
                </Link>
            </div>
        );
    }

    return (
        <div className="cart-container">
            <h1>Your Cart ({cartCount} items)</h1>

            <div className="cart-items">
                {cartItems.map((item) => (
                    <div key={item._id} className="cart-item">
                        <img
                            src={
                                item.image ||
                                "https://via.placeholder.com/100x150"
                            }
                            alt={item.title}
                        />

                        <div className="item-details">
                            <h3>{item.title}</h3>
                            <p>by {item.author || "Unknown Author"}</p>
                            <p className="price">€{item.price}</p>
                        </div>

                        <div className="quantity-controls">
                            <button
                                onClick={() =>
                                    updateQuantity(item._id, item.quantity - 1)
                                }
                            >
                                -
                            </button>
                            <span>{item.quantity}</span>
                            <button
                                onClick={() =>
                                    updateQuantity(item._id, item.quantity + 1)
                                }
                            >
                                +
                            </button>
                        </div>

                        <div className="item-total">
                            <p>€{(item.price * item.quantity).toFixed(2)}</p>
                            <button
                                onClick={() => removeFromCart(item._id)}
                                className="remove-btn"
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="cart-summary">
                <h2>Order Summary</h2>

                <div className="summary-row">
                    <span>Subtotal:</span>
                    <span>€{cartTotal.toFixed(2)}</span>
                </div>

                <div className="summary-row total">
                    <span>Total:</span>
                    <span>€{cartTotal.toFixed(2)}</span>
                </div>

                <button className="checkout-btn">Proceed to Checkout</button>

                <button onClick={clearCart} className="clear-btn">
                    Clear Cart
                </button>
            </div>
        </div>
    );
}
