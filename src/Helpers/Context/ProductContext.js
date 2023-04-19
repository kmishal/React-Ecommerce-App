import { createContext, useState } from 'react';

export const productContext = createContext(null);

const ProductContext = function ({ children }) {
    const [product, setProduct] = useState(null);
    return (
        <productContext.Provider value={{ product, setProduct }}>
            {children}
        </productContext.Provider>
    );
};

export default ProductContext;
