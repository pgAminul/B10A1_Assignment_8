// CartContext.js
import React, { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem("cartItems");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const [wishlistitem, setWishlistItem] = useState(() => {
    const storedWishList = localStorage.getItem("wishList");
    return storedWishList ? JSON.parse(storedWishList) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("wishList", JSON.stringify(wishlistitem));
  }, [wishlistitem]);

  const addToCart = (product) => {
    const isProductInCart = cartItems.some(
      (item) => item.product_id === product.product_id
    );

    if (isProductInCart) {
      toast.warning("Already added the item!", {
        position: "top-center",
        autoClose: 1200,
      });
    } else {
      setCartItems((prevItems) => [...prevItems, product]);
      toast.success("Cart added successfully!", {
        position: "top-center",
        autoClose: 1200,
      });
    }
  };

  const addToWishList = (wishList) => {
    const isWishListCart = wishlistitem.some(
      (data) => data.product_id === wishList.product_id
    );
    if (isWishListCart) {
      toast.warning("Already added the item!", {
        position: "top-center",
        autoClose: 1200,
      });
    } else {
      setWishlistItem((prevItem) => [...prevItem, wishList]);
      toast.success("Wishlist added successfully!", {
        position: "top-center",
        autoClose: 1200,
      });
    }
  };

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.product_id !== id);
    setCartItems(updatedCart);
  };

  const removeFromWishlist = (id) => {
    const updatedWishlist = wishlistitem.filter(
      (item) => item.product_id !== id
    );
    setWishlistItem(updatedWishlist);
  };

  const clearStorage = () => {
    setCartItems([]);
    setWishlistItem([]);
    localStorage.removeItem("cartItems");
    localStorage.removeItem("wishList");
    toast.success("All items have been cleared!", {
      position: "top-center",
      autoClose: 1200,
    });
  };

  const cartCount = cartItems.length;
  const wishListCount = wishlistitem.length;

  return (
    <CartContext.Provider
      value={{
        cartItems,
        wishlistitem,
        cartCount,
        wishListCount,
        addToCart,
        addToWishList,
        removeFromCart,
        removeFromWishlist,
        clearStorage, // Exposing the clearStorage function
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
