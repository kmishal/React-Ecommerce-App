import { createContext, useState } from 'react';

export const appContext = createContext(null);

export default function AppContext({ children }) {
    const [drawerType, setDrawerType] = useState(null);

    return (
        <appContext.Provider value={{ drawerType, setDrawerType }}>
            {children}
        </appContext.Provider>
    );
}
