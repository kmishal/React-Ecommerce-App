import './Navigation.scss';

export default function Navigation() {
    return (
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__list-item">
                    <a href="/">Home</a>
                </li>
                <li className="nav__list-item active">
                    <a href="/">Shop</a>
                </li>
                <li className="nav__list-item">
                    <a href="/">Blogs</a>
                </li>
                <li className="nav__list-item">
                    <a href="/">About</a>
                </li>
                <li className="nav__list-item">
                    <a href="/">Contact</a>
                </li>
            </ul>
        </nav>
    );
}
