import './HeaderActions.scss';
import { appContext } from '../../../Helpers/Context/AppContext';
import { useContext } from 'react';
export default function HeaderAction() {
    const { setDrawerType } = useContext(appContext);

    return (
        <div className="header__actions">
            <span>
                <a href="/">Login</a>
            </span>{' '}
            /{' '}
            <span>
                <a href="/">SignUp</a>
            </span>
            <span onClick={() => setDrawerType('cart-drawer')}>
                View Cart Drawer
            </span>
        </div>
    );
}
