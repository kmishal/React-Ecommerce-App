import './Drawer.scss';

export default function Drawer({
    children,
    drawerTitle,
    drawerType,
    drawerIdentifier,
}) {
    const setDrawerActive = drawerType === drawerIdentifier;
    return (
        <div
            className={`drawer ${setDrawerActive ? 'drawer-active' : ''}`}
            drawer-type={drawerType}
        >
            <div className="drawer__container">
                <div className="drawer__header">{drawerTitle}</div>
                <div className="drawer__body">{children}</div>
            </div>
        </div>
    );
}
