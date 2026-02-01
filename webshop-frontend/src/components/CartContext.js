import React, { createContext, useState, useContext, useEffect } from "react";

// Create the context
const CartContext = createContext();

// Custom hook to use cart
export const useCart = () => {
    const context = useContext(CartContext);

    // Debug log
    console.log("useCart context:", context);

    if (!context) {
        console.error("useCart must be used within a CartProvider");
        // Return a safe default
        return {
            cartItems: [],
            addToCart: () => console.warn("Cart not available"),
            removeFromCart: () => console.warn("Cart not available"),
            updateQuantity: () => console.warn("Cart not available"),
            clearCart: () => console.warn("Cart not available"),
            getCartTotal: () => 0,
            getCartCount: () => 0,
        };
    }

    return context;
};

// Cart provider component
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        try {
            const savedCart = localStorage.getItem("novella_cart");
            return savedCart ? JSON.parse(savedCart) : [];
        } catch (error) {
            console.error("Error loading cart:", error);
            return [];
        }
    });

    // Save to localStorage when cart changes
    useEffect(() => {
        try {
            localStorage.setItem("novella_cart", JSON.stringify(cartItems));
        } catch (error) {
            console.error("Error saving cart:", error);
        }
    }, [cartItems]);

    // Add item to cart
    const addToCart = (product, quantity = 1) => {
        console.log("Adding to cart:", product);
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(
                (item) => item._id === product._id,
            );

            if (existingItem) {
                return prevItems.map((item) =>
                    item._id === product._id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item,
                );
            } else {
                return [...prevItems, { ...product, quantity }];
            }
        });
    };

    // Remove item from cart
    const removeFromCart = (productId) => {
        setCartItems((prevItems) =>
            prevItems.filter((item) => item._id !== productId),
        );
    };

    // Update item quantity
    const updateQuantity = (productId, quantity) => {
        if (quantity <= 0) {
            removeFromCart(productId);
            return;
        }

        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item._id === productId ? { ...item, quantity } : item,
            ),
        );
    };

    // Clear all items from cart
    const clearCart = () => {
        setCartItems([]);
    };

    // Calculate total price
    const getCartTotal = () => {
        return cartItems.reduce((total, item) => {
            const price = parseFloat(item.price) || 0;
            const quantity = parseInt(item.quantity) || 0;
            return total + price * quantity;
        }, 0);
    };

    // Calculate total items count
    const getCartCount = () => {
        return cartItems.reduce((count, item) => {
            return count + (parseInt(item.quantity) || 0);
        }, 0);
    };

    // Context value
    const value = {
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
        getCartCount, // Make sure this is included!
    };

    console.log("CartProvider value:", value); // Debug log

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};

// Export default as well for backward compatibility
export default CartContext;
