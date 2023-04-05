import './HeaderActions.scss';

export default function HeaderAction() {
    return (
        <div className="header__actions">
            <span>
                <a href="/">Login</a>
            </span>{' '}
            /{' '}
            <span>
                <a href="/">SignUp</a>
            </span>
        </div>
    );
}
