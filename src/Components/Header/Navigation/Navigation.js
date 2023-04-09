import './Navigation.scss';
import { NavLink } from 'react-router-dom';
export default function Navigation() {
    return (
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__list-item active">
                    <NavLink to="/">Collection List</NavLink>
                </li>
                <li className="nav__list-item">
                    <NavLink to="/collection">Collection</NavLink>
                </li>
            </ul>
        </nav>
    );
}
