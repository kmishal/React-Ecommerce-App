import CustomImage from '../Common/CustomImage';
import './ProductMedia.scss';

export default function ProductMedia({ media, title }) {
    return (
        <div className="product__image-aspectSize">
            <div className="product-image">
                <CustomImage imgUrl={media[0]} title={title} />
            </div>
        </div>
    );
}
