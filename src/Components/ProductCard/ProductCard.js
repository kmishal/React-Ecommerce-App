import './ProductCard.scss';
// import productImage from '../../images/product-image.png';
import StarIcon from '../Common/StarIcon';
import WhishListIcon from '../Common/WhishListIcon';
import CustomImage from '../Common/CustomImage';
import { useContext, useState } from 'react';
import { appContext } from '../../Helpers/Context/AppContext';
import { AddProductToCart } from '../../Helpers/Helper';

const ProductCard = function ({ product }) {
    const { setDrawerType, setCartItems } = useContext(appContext);
    const [buttonState, setButtonState] = useState('complete');
    let discountPrice = Math.ceil(
        product.price - (product.price * product.discountPercentage) / 100
    );

    const handleFormSubmit = function (productId, e) {
        e.preventDefault();
        setButtonState('loading');
        AddProductToCart(productId, ({ data }) => {
            let productData = { ...data };
            if (!productData.hasOwnProperty('quantity')) {
                productData['quantity'] = 1;
            }
            setCartItems((prevCartItems) => {
                const isItemPresent = prevCartItems.find(
                    (item) => item.id === productData.id
                );
                if (isItemPresent) {
                    return prevCartItems.map((item) => {
                        if (item.id === productData.id) {
                            item.quantity += 1;
                            return item;
                        } else {
                            return item;
                        }
                    });
                } else {
                    return [productData, ...prevCartItems];
                }
            });
            setDrawerType('cart-drawer');
            setButtonState('complete');
        });
    };

    return (
        <div className="product__card">
            {/* Product image */}
            <div className="product__card__image__wrapper pos-relative ">
                <div className="product__card__image-aspectSize">
                    <div className="product__card-image">
                        <CustomImage
                            imgUrl={product.images[0]}
                            title={product.title}
                        />
                    </div>
                </div>
                {product.rating && (
                    <div className="product__card-rating">
                        <span>
                            <StarIcon />
                        </span>
                        <span> {product.rating}</span>
                    </div>
                )}

                <div className="product__card-whishList">
                    <span>
                        <WhishListIcon />
                    </span>
                </div>
            </div>
            <div className="product__card-details">
                {/* Product Title */}
                <p className="product__card-title">{product.title}</p>
                {/* Product Vendor */}
                <h4 className="product__card-vendor">{product.brand}</h4>
                <p className="product__card-price__wrapper">
                    {product.discountPercentage ? (
                        <>
                            <span className="compare__price">
                                Rs. {product.price}
                            </span>
                            <span className="price">Rs. {discountPrice}</span>
                        </>
                    ) : (
                        <span className="price">Rs. {discountPrice}</span>
                    )}
                </p>
                <form onSubmit={(e) => handleFormSubmit(product.id, e)}>
                    <input type="hidden" name="id" value={product.id} />
                    <button
                        type="submit"
                        disabled={buttonState === 'loading' ? 'disabled' : ''}
                        className={
                            buttonState === 'loading'
                                ? 'button button__loading'
                                : 'button'
                        }
                    >
                        <span className="button__text">Add to cart </span>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ProductCard;
