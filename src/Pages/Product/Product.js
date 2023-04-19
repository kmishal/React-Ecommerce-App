// import Banner from '../../Components/Banner/Banner';
import ProductArea from '../../Components/ProductSection/ProductArea';

import ProductContext from '../../Helpers/Context/ProductContext';

const Product = function () {
    return (
        <ProductContext>
            {/* <Banner /> */}
            <ProductArea />
        </ProductContext>
    );
};

export default Product;
