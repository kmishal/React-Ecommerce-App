import Drawer from '../Components/Common/Drawer/Drawer';
import CartDrawer from '../Components/CartDrawer/CartDrawer';
import { createPortal } from 'react-dom';
import { useContext } from 'react';
import { appContext } from './Context/AppContext';

export default function DrawerManager() {
    const { drawerType } = useContext(appContext);
    console.log(drawerType);
    const DrawerElements = (
        <>
            <Drawer
                drawerTitle="Cart Drawer"
                drawerType="cart-drawer"
                drawerIdentifier={drawerType}
            >
                <CartDrawer />
            </Drawer>
            <Drawer
                drawerTitle="Filter Drawer"
                drawerType="filter-drawer"
                drawerIdentifier={drawerType}
            >
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
