import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useAuth } from "./AuthContext";

const CartContext = createContext(null);

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};

export const CartProvider = ({ children }) => {
    const { user } = useAuth();
    const [cartItems, setCartItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);

        if (!user) {
            setCartItems([]);
            setIsLoading(false);
            return;
        }

        const timer = setTimeout(() => {
            const key = `novella_cart_${user._id}`;

            try {
                const saved = localStorage.getItem(key);
                const parsed = saved ? JSON.parse(saved) : [];
                setCartItems(Array.isArray(parsed) ? parsed : []);
            } catch (err) {
                console.warn("Failed to load cart from localStorage:", err);
                setCartItems([]);
            } finally {
                setIsLoading(false);
            }
        }, 50);

        return () => clearTimeout(timer);
    }, [user]);

    useEffect(() => {
        if (!user || isLoading) return;

        const key = `novella_cart_${user._id}`;

        try {
            localStorage.setItem(key, JSON.stringify(cartItems));
        } catch (error) {
            console.error("Failed to save cart to localStorage:", error);
        }
    }, [cartItems, user, isLoading]);

    // Optional: Add cleanup on logout
    useEffect(() => {
        if (!user) {
            setCartItems([]);
        }
    }, [user]);

    const requireAuth = () => {
        if (!user) {
            throw new Error("You must be logged in to use the cart");
        }
        if (isLoading) {
            throw new Error("Cart is still loading, please wait");
        }
    };

    const addToCart = (product, quantity = 1) => {
        requireAuth();
        if (!product?._id || quantity <= 0) return;

        setCartItems((prev) => {
            const existing = prev.find((item) => item._id === product._id);

            if (existing) {
                return prev.map((item) =>
                    item._id === product._id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item,
                );
            }

            return [
                ...prev,
                {
                    _id: product._id,
                    title: product.title,
                    author: product.author,
                    price: Number(product.price),
                    image: product.image,
                    quantity,
                },
            ];
        });
    };

    const removeFromCart = (productId) => {
        requireAuth();
        setCartItems((prev) => prev.filter((item) => item._id !== productId));
    };

    const updateQuantity = (productId, quantity) => {
        requireAuth();

        if (quantity <= 0) {
            removeFromCart(productId);
            return;
        }

        setCartItems((prev) =>
            prev.map((item) =>
                item._id === productId ? { ...item, quantity } : item,
            ),
        );
    };

    const clearCart = () => {
        requireAuth();
        setCartItems([]);
    };

    // ---- Derived data (memoized) ----
    const cartCount = useMemo(() => {
        return cartItems.reduce((count, item) => count + item.quantity, 0);
    }, [cartItems]);

    const cartTotal = useMemo(() => {
        return cartItems.reduce(
            (total, item) => total + item.price * item.quantity,
            0,
        );
    }, [cartItems]);

    const value = {
        cartItems,
        cartCount,
        cartTotal,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isLoading, // Export loading state if needed
    };

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};
