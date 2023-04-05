import './CollectionGrid.scss';
import ProductCard from './ProductCard';

export default function CollectionGrid() {
    return (
        <div className="product__grid-layout">
            <div className="container">
                <h3 className="product__main__info">
                    <span className="product__main__info-title">Women</span>
                    <span className="dot"></span>
                    <span className="product__main__info-product__count">
                        456 Items
                    </span>
                </h3>
                <div className="product__card__wrapper">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
        </div>
    );
}
