import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext()

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [itemAmount, setItemAmount] = useState([0])
  const [total, setTotal] = useState(0)
  // update item
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount
      }, 0)
      setItemAmount(amount)
    }
  }, [cart])

  // tong tien
  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.amount
    }, 0)
    setTotal(total)
  }, [cart])

  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 }
    const cartItem = cart.find((item) => {
      return item.id === id;
    })
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 }
        } else {
          return item
        }
      })
      setCart(newCart)
    } else {
      setCart([...cart, newItem])
    }
  }

  const removeFormCart = (id) => {
    const newCart = cart.filter(item => {
      return item.id !== id;
    })
    setCart(newCart)
  }

  const clearCart = () => {
    setCart([]);
  }

  const increaseAmount = (id) => {
    const cartItems = cart.find((cartItems) => cartItems.id === id)
    addToCart(cartItems, id)
  }

  const decreaseAmount = (id) => {
    const cartItems = cart.find((item) => {
      return item.id === id;
    })
    if (cartItems) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItems.amount - 1 }
        } else {
          return item
        }
      })
      setCart(newCart)
    }
    if (cartItems.amount < 2) {
      removeFormCart(id)
    }
  }
  return <CartContext.Provider value={{
    cart,
    addToCart,
    removeFormCart,
    clearCart,
    increaseAmount,
    decreaseAmount,
    itemAmount,
    total
  }}>
    {
      children
    }
  </CartContext.Provider>;
};

export default CartProvider;
