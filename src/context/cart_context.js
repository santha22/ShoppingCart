import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/cartReducer";

const CartContext = createContext();

const getLocalCartData = () => {
    let localCartData = localStorage.getItem("shoppingCart");

    if(localCartData?.length === 0) {
        return []
    } else {
        return JSON.parse(localCartData);
    }
}

const initialState = {
    cart: getLocalCartData(),
    total_item: "",
    total_price: "",
    shipping_fee: 50000,
}

const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const removeItem = (id) => {
        dispatch({ type: "REMOVE_ITEM", payload: id})
    }

    // clear the cart 
    const clearCart = () => {
        dispatch({type: "CLEAR_CART"});
    }

    const addToCart = (id, amount, product) => {
        dispatch({type: "ADD_TO_CART", payload: {id, amount, product}});
    }

    const setDecrease = (id) => {
        dispatch({type: "SET_DECREMENT", payload: id})
    }

    const setIncrease = (id) => {
        dispatch({type: "SET_INCREMENT", payload: id})
    }



    // to add data in localStorage 
    useEffect(() => {
        dispatch({type: "CART_T0TAL_PRICE"});
        localStorage.setItem("shoppingCart", JSON.stringify(state.cart));
    }, [state.cart]);

    return (
        <CartContext.Provider value={{...state, addToCart, removeItem, clearCart, setDecrease, setIncrease }}>
            {children}
        </CartContext.Provider>
    )
}


const useCartContext = () => {
    return useContext(CartContext);
}

export { CartProvider, useCartContext };