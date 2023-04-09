import './LineItem.scss';
import CustomImage from '../Common/CustomImage';
import DeleteIcon from '../Common/DeletIcon';
import { useContext } from 'react';
import { appContext } from '../../Helpers/Context/AppContext';

const LineItem = function ({ lineItemData }) {
    const { setCartItems } = useContext(appContext);
    let discountPrice = Math.ceil(
        lineItemData.price -
            (lineItemData.price * lineItemData.discountPercentage) / 100
    );

    const handleDeleteLineItem = (productId) => {
        setCartItems((prevCartItems) => {
            const updatedCartItems = prevCartItems.filter(
                (item) => item.id !== productId
            );
            return [...updatedCartItems];
        });
    };

    return (
        <div className="lineItem">
            <div className="lineItem__flex">
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
                    <div className="lineItem__flex">
                        <div className="lineItem__lb w-70">
                            <span className="lineItem__quantity">
                                Qty: {lineItemData.quantity}
                            </span>
                            <p className="lineItem-price__wrapper">
                                {lineItemData.discountPercentage ? (
                                    <>
                                        <span className="compare__price">
                                            Rs. {lineItemData.price}
                                        </span>
                                        <span className="price">
                                            Rs. {discountPrice}
                                        </span>
                                    </>
                                ) : (
                                    <span className="price">
                                        Rs. {discountPrice}
                                    </span>
                                )}
                            </p>
                        </div>
                        <div className="lineItem__rb w-30">
                            <span
                                onClick={() =>
                                    handleDeleteLineItem(lineItemData.id)
                                }
                            >
                                <DeleteIcon />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LineItem;
