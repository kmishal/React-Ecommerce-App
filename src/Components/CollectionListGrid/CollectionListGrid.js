import { useEffect, useState } from 'react';
import './CollectionListGrid.scss';
import { FetchData } from '../../Helpers/Api';

const CollectionListGrid = function () {
    const [productCategories, setProductCategories] = useState(null);

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

    return <div>Collection List Grid</div>;
};

export default CollectionListGrid;
