import Drawer from './Drawer';
import CartDrawer from '../../CartDrawer/CartDrawer';
import { createPortal } from 'react-dom';

export default function DrawerManager() {
    const DrawerElements = (
        <>
            <Drawer drawerTitle="Cart Drawer" drawerName="cart-drawer">
                <CartDrawer />
            </Drawer>
            <Drawer drawerTitle="Filter Drawer" drawerName="filter-drawer">
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