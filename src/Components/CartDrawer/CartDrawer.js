import { useContext } from 'react';
import { appContext } from '../../Helpers/Context/AppContext';
import LineItem from './LineItem';
import './CartDrawer.scss';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
    const { cartItems, setDrawerType } = useContext(appContext);

    let cartDrawerContent = (
        <div className="cart__drawer__empty-cart">
            <p className="empty__cart-message">Your Shopping List is Empty</p>
            <Link
                to="/collection"
                className="continue__shopping"
                onClick={() => setDrawerType(null)}
            >
                Continue Shopping
            </Link>
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
