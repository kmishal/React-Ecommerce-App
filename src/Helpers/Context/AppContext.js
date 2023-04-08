import { createContext, useState } from 'react';

export const appContext = createContext(null);

export default function AppContext({ children }) {
    const [drawerType, setDrawerType] = useState(null);
    const [cartItems, setCartItems] = useState([]);
    return (
        <appContext.Provider
            value={{ drawerType, setDrawerType, cartItems, setCartItems }}
        >
            {children}
        </appContext.Provider>
    );
}
