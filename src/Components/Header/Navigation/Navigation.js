import './Navigation.scss';
import { NavLink } from 'react-router-dom';
export default function Navigation() {
    return (
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__list-item">
                    <NavLink to="/collection/all">Shop</NavLink>
                </li>
                <li className="nav__list-item">
                    <NavLink to="/">Categories</NavLink>
                </li>
            </ul>
        </nav>
    );
}
