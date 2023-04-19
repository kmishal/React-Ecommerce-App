// import { useParams } from 'react-router-dom';
import './ProductDetails.scss';
import StarIcon from '../Common/StarIcon';
// import { useEffect, useState } from 'react';
// import { FetchData } from '../../Helpers/Api';

const ProductDetails = function ({ product }) {
    return (
        <div className="product__info">
            <div className="product____wrapper">
                <h1 className="product__title">{product.title}</h1>
                <div className="product__rating">
                    <div className="el__flex">
                        {[...Array(Math.floor(product.rating))].map((e, i) => (
                            <div className="star">
                                <StarIcon />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="product__brand">{product.brand}</div>
                <div className="product__description">
                    {product.description}
                </div>
                <form id="product__form">
                    <input type="hidden" name="id" value={product.id} />
                    <div className="product__quantitySelector">
                        <input type="number" name="quantity" value="1" />
                    </div>
                    <div className="product__ctas">
                        <button
                            className="product__submit-button"
                            type="submit"
                        >
                            Add to cart
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProductDetails;
