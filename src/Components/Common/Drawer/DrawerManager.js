import Drawer from './Drawer';
import CartDrawer from '../../CartDrawer/CartDrawer';
import { createPortal } from 'react-dom';

export default function DrawerManager() {
    const DrawerElements = (
        <>
            <Drawer drawerTitle="Shopping Cart" drawerName="cart-drawer">
                <CartDrawer />
            </Drawer>
            <Drawer drawerTitle="Filter" drawerName="filter-drawer">
                <div>Filter drawer</div>
            </Drawer>
        </>
    );

    return (
        <>
            {createPortal(
                DrawerElements,
                document.getElementById('aside-elements')
            )}
        </>
    );
}
