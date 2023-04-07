import './ProductCard.scss';
// import productImage from '../../images/product-image.png';
import StarIcon from '../Common/StarIcon';
import WhishListIcon from '../Common/WhishListIcon';
import CustomImage from '../Common/CustomImage';
import { useContext } from 'react';
import { appContext } from '../../Helpers/Context/AppContext';

export default function ProductCard({ product }) {
    const { setDrawerType } = useContext(appContext);
    let discountPrice = Math.ceil(
        product.price - (product.price * product.discountPercentage) / 100
    );

    const handleFormSubmit = function (productId, e) {
        e.preventDefault();
        setDrawerType('cart-drawer');
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
                {/* Product Vendor */}
                <h4 className="product__card-vendor">{product.brand}</h4>
                {/* Product Title */}
                <p className="product__card-title">{product.title}</p>
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
                    <button type="submit">Add to cart</button>
                </form>
            </div>
        </div>
    );
}
