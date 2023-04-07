import './CollectionGrid.scss';
import ProductCard from '../ProductCard/ProductCard';
import { useEffect, useState } from 'react';
import { FetchData } from '../../Helpers/Api';

export default function CollectionGrid() {
    const [productData, setProductData] = useState(null);
    const productCount = productData ? productData.length : null;
    let productCards = null;
    useEffect(() => {
        FetchData('https://dummyjson.com/products/?limit=50').then(
            ({ data }) => {
                setProductData(data.products);
            }
        );
    }, []);

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
