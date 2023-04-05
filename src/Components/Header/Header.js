import HeaderAction from './HeaderActions/HeaderActions';
import Logo from './Logo';
import Navigation from './Navigation/Navigation';
import './Header.scss';

export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    {/* Logo */}
                    <Logo />
                    <Navigation />
                    <HeaderAction />
                    {/* Navigation Link */}
                    {/* Login/Signup/ icons */}
                </div>
            </div>
        </header>
    );
}
