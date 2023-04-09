import { FetchData } from './Api';

const AddProductToCart = (productId, cb) => {
    FetchData(`https://dummyjson.com/products/${productId}`).then((data) => {
        cb(data);
    });
};

export { AddProductToCart };
