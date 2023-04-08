import { useContext } from 'react';
import { appContext } from '../../Helpers/Context/AppContext';
import LineItem from './LineItem';

export default function CartDrawer() {
    const { cartItems } = useContext(appContext);

    let cartDrawerContent = (
        <div className="cart__drawer_empty-cart">Cart is Empty</div>
    );

    if (cartItems.length > 0) {
        cartDrawerContent = cartItems.map((lineItem) => {
            return <LineItem key={lineItem.id} lineItemData={lineItem} />;
        });
    }

    return <div className="cart__drawer">{cartDrawerContent}</div>;
}
