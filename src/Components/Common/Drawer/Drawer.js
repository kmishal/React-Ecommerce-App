import './Drawer.scss';
import { appContext } from '../../../Helpers/Context/AppContext';
import { useContext } from 'react';

export default function Drawer({ children, drawerTitle, drawerName }) {
    const { drawerType, setDrawerType } = useContext(appContext);
    const setDrawerActive = drawerName === drawerType;

    const closeDrawer = (e) => {
        const targetEl = e.target;
        const hasDrawerTypeAttribute = targetEl.hasAttribute('drawer-type');
        if (hasDrawerTypeAttribute) {
            setDrawerType(null);
        }
    };

    document.addEventListener('keyup', (e) => {
        e.key === 'Escape' && setDrawerType(null);
    });

    return (
        <div
            className="drawer"
            drawer-type={drawerName}
            onClick={closeDrawer}
            drawer-active={setDrawerActive ? 'true' : 'false'}
        >
            <div className="drawer__container">
                <div className="drawer__header">{drawerTitle}</div>
                <div className="drawer__body">{children}</div>
            </div>
        </div>
    );
}
