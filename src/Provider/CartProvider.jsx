/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";

export const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const { user } = useContext(AuthContext);

  const [cart, setCart] = useState([]);
  const [productId, setProductId] = useState([]);

  useEffect(() => {
    if (user) {
      fetch(`https://tech-haven-server.vercel.app/user/cart/${user.uid}`)
        .then((res) => res.json())
        .then((data) => {
          setCart(data);
        })
        .catch((error) => console.error(error));
    }
  }, [user, cart]);

  useEffect(() => {
    if (user) {
      fetch(`https://tech-haven-server.vercel.app/user/${user.uid}`)
        .then((res) => res.json())
        .then((data) => {
          setProductId(data);
        })
        .catch((error) => console.error(error));
    }
  }, [user, productId]);

  const addItemToCart = (itemId) => {
    const updatedCart = [...productId, itemId];
    setCart(updatedCart);

    if (user) {
      const mongoUser = {
        email: user.email,
        uid: user.uid,
        cart: updatedCart,
      };
      fetch(`https://tech-haven-server.vercel.app/users`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(mongoUser),
      })
        .then((response) => response.json())
        .then((data) => {})
        .catch((error) => console.error(error));
    }
  };
  const purchaseCartItems = () => {
    const updatedCart = [];
    setCart(updatedCart);
    if (user) {
      const mongoUser = {
        email: user.email,
        uid: user.uid,
        cart: updatedCart,
      };
      fetch(`https://tech-haven-server.vercel.app/user/${user.uid}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(mongoUser),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => console.error(error));
    }
  };

  const cartTotalPrice = cart?.reduce(
    (acc, product) => acc + Number(product?.price),
    0
  );

  const CartInfo = {
    addItemToCart,
    cart,
    cartTotalPrice,
    purchaseCartItems,
  };

  return (
    <CartContext.Provider value={CartInfo}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
