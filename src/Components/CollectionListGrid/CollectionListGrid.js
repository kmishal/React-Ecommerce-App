import { useEffect, useState } from 'react';
import './CollectionListGrid.scss';
import { FetchData } from '../../Helpers/Api';
import CollectionCard from '../CollectionCard/CollectionsCard';

const CollectionListGrid = function () {
    const [productCategories, setProductCategories] = useState(null);

    let collectionTemplate = (
        <div className="collection__empty__template">
            Loading Collection List
        </div>
    );

    useEffect(() => {
        const abortController = new AbortController();
        FetchData('https://dummyjson.com/products/categories', {
            signal: abortController.signal,
        })
            .then(({ data }) => {
                setProductCategories(data);
            })
            .catch((error) => {});
        return () => {
            abortController.abort();
        };
    }, []);

    if (productCategories) {
        collectionTemplate = productCategories.map((itemName, index) => (
            <CollectionCard key={index} collectionName={itemName} />
        ));
    }
    return (
        <div className="collection__grid-layout">
            <div className="container">
                <h3 className="collection__main__info">
                    <span className="collection__main__info-title">
                        Collection List
                    </span>
                </h3>
                <div className="collection__card__wrapper">
                    {collectionTemplate}
                </div>
            </div>
        </div>
    );
};

export default CollectionListGrid;
