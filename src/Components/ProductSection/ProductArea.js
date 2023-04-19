import ProductDetails from './ProductDetails';
import ProductMedia from './ProductMedia';
import { productContext } from '../../Helpers/Context/ProductContext';
import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FetchData } from '../../Helpers/Api';

export default function ProductArea() {
    const { product, setProduct } = useContext(productContext);
    const { productId } = useParams();

    useEffect(() => {
        const abortController = new AbortController();
        FetchData(`https://dummyjson.com/products/${productId}`, {
            signal: abortController.signal,
        })
            .then(({ data }) => {
                console.log(data);
                setProduct(data);
            })
            .catch((error) => {});

        return () => {
            abortController.abort();
        };
    }, [setProduct, productId]);
    return (
        <div className="container">
            <div className="product__details">
                <div className="el__flex">
                    <div className="el__left">
                        {product && (
                            <ProductMedia
                                media={product.images}
                                title={product.title}
                            />
                        )}
                    </div>
                    <div className="el__right">
                        {product && <ProductDetails product={product} />}
                    </div>
                </div>
            </div>
        </div>
    );
}
