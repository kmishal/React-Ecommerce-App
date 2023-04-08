import { useContext } from 'react';
import { appContext } from '../../Helpers/Context/AppContext';
import LineItem from './LineItem';
import './CartDrawer.scss';

export default function CartDrawer() {
    const { cartItems, setDrawerType } = useContext(appContext);

    let cartDrawerContent = (
        <div className="cart__drawer__empty-cart">
            <p class="empty__cart-message">Your Shopping List is Empty</p>
            <div
                className="continue__shopping"
                onClick={() => setDrawerType(null)}
            >
                Continue Shopping
            </div>
        </div>
    );

    if (cartItems.length > 0) {
        cartDrawerContent = cartItems.map((lineItem) => {
            return <LineItem key={lineItem.id} lineItemData={lineItem} />;
        });
    }

    return (
        <div className="cart__drawer">
            <div className="cart__drawer__details-wrapper">
                {cartDrawerContent}
            </div>

            {cartItems.length > 0 && (
                <div className="cart__drawer__actions">
                    <button className="cart__drawer__checkout" type="submit">
                        Checkout
                    </button>
                </div>
            )}
        </div>
    );
}
