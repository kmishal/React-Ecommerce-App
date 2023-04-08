import './LineItem.scss';
import CustomImage from '../Common/CustomImage';

const LineItem = function ({ lineItemData }) {
    let discountPrice = Math.ceil(
        lineItemData.price -
            (lineItemData.price * lineItemData.discountPercentage) / 100
    );
    return (
        <div className="lineItem">
            <div className="lineItem__lb">
                <div className="lineItem__image-aspectSize">
                    <CustomImage
                        imgUrl={lineItemData.images[0]}
                        title={lineItemData.title}
                    />
                </div>
            </div>
            <div className="lineItem__rb">
                <div className="lineItem__title">{lineItemData.title}</div>{' '}
                <div className="lineItem__brand">{lineItemData.brand}</div>{' '}
                <span className="lineItem__quantity">
                    Qty: {lineItemData.quantity}
                </span>
                <p className="lineItem-price__wrapper">
                    {lineItemData.discountPercentage ? (
                        <>
                            <span className="compare__price">
                                Rs. {lineItemData.price}
                            </span>
                            <span className="price">Rs. {discountPrice}</span>
                        </>
                    ) : (
                        <span className="price">Rs. {discountPrice}</span>
                    )}
                </p>
            </div>
        </div>
    );
};

export default LineItem;
