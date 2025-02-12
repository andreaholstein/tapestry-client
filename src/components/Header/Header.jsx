// -------------- FXNALITY --------------
import { Link, useLocation } from "react-router";
import "./Header.scss";

function Header() {
  const location = useLocation();
  const hideHeader = ["/login", "/signup"];
  const shouldHideHeader = hideHeader.includes(location.pathname);

  return (
    <>
      {!shouldHideHeader && (
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
      )}
    </>
  );
}

export default Header;
