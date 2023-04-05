import './ProductCard.scss';
import productImage from '../../images/product-image.png';
import StarIcon from '../Common/StarIcon';
import WhishListIcon from '../Common/WhishListIcon';

export default function ProductCard() {
    const handleFormSubmit = function (productId, e) {
        e.preventDefault();
        console.log(productId);
    };

    return (
        <div className="product__card">
            {/* Product image */}
            <div className="product__card__image__wrapper pos-relative ">
                <div className="product__card__image-aspectSize">
                    <div className="product__card-image">
                        <img src={productImage} alt="Title" loading="lazy" />
                    </div>
                </div>
                <div className="product__card-rating">
                    <span>
                        <StarIcon />
                    </span>
                    <span> 4.5</span>
                </div>
                <div className="product__card-whishList">
                    <span>
                        <WhishListIcon />
                    </span>
                </div>
            </div>
            <div className="product__card-details">
                {/* Product Vendor */}
                <h4 className="product__card-vendor">VERO MODA</h4>
                {/* Product Title */}
                <p className="product__card-title">Blue Soft Knit Sweater</p>
                <p className="product__card-price__wrapper">
                    <span className="compare__price">Rs. 2299</span>
                    <span className="price">Rs. 1790</span>
                </p>
                <form onSubmit={(e) => handleFormSubmit(1, e)}>
                    <input type="hidden" value="1" />
                    <button type="submit">Add to cart</button>
                </form>
            </div>
        </div>
    );
}
