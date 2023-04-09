import { Link } from 'react-router-dom';
import './CollectionCard.scss';

const CollectionCard = function ({ collectionName }) {
    return (
        <Link to={`/collection/${collectionName}`} className="collection__card">
            <div className="collection__card__aspectSize">
                <div className="collection__card__title">{collectionName}</div>
                <div className="collection__card__overlay"></div>
            </div>
        </Link>
    );
};

export default CollectionCard;
