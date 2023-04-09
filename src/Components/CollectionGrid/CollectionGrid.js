import './CollectionGrid.scss';
import ProductCard from '../ProductCard/ProductCard';
import { useEffect, useState } from 'react';
import { FetchData } from '../../Helpers/Api';
import { useParams } from 'react-router';

export default function CollectionGrid() {
    const [productData, setProductData] = useState(null);
    const productCount = productData ? productData.length : null;
    const { category } = useParams();
    let fetchUrl;
    if (category === 'all') {
        fetchUrl = `https://dummyjson.com/products?limit=0`;
    } else {
        fetchUrl = `https://dummyjson.com/products/category/${category}?limit=0`;
    }
    let productCards = null;
    useEffect(() => {
        const abortController = new AbortController();
        FetchData(fetchUrl, {
            signal: abortController.signal,
        })
            .then(({ data }) => {
                setProductData(data.products);
            })
            .catch((error) => {});

        return () => {
            abortController.abort();
        };
    }, [fetchUrl]);

    if (productData) {
        productCards = productData.map((product) => (
            <ProductCard key={product.id} product={product} />
        ));
    } else {
        productCards = <p>Loading product</p>;
    }

    return (
        <div className="product__grid-layout">
            <div className="container">
                <h3 className="product__main__info">
                    <span className="product__main__info-title">Products</span>
                    <span className="dot"></span>
                    <span className="product__main__info-product__count">
                        {productCount &&
                            `${productCount}  ${
                                productCount > 1 ? 'items' : 'item'
                            } `}
                    </span>
                </h3>
                <div className="product__card__wrapper">{productCards}</div>
            </div>
        </div>
    );
}
