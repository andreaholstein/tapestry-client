// -------------- FXNALITY --------------
import { Link } from 'react-router'
// -------------- STYLES --------------
import './Header.scss'

function Header() {

    return (
        <section className="header">
            <nav className="header__nav">
                <Link to="/">
                    <h1 className="header__logo">LOGO</h1>
                </Link>
                <Link to="/profile">
                    <button className="header__profile-button">PROFILE</button>
                    {/* <svg className="header__profile-icon"></svg> */}
                </Link>
                {/* alt: can use onClick + useNavigate */}
            </nav>
        </section>
    )
}

export default Header
