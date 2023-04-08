import './LineItem.scss';
import CustomImage from '../Common/CustomImage';

const LineItem = function ({ lineItemData }) {
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
                {lineItemData.title} Quanity: {lineItemData.quantity}
            </div>
        </div>
    );
};

export default LineItem;
