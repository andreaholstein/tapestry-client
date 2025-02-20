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
              <h1 className="header__logo">tapestry</h1>
            </Link>
            <Link to="/profile">
              <svg src="client/src/assets/icons/profile-icon.svg" className="header__profile-icon"></svg>
            </Link>
          </nav>
        </section>
      )}
    </>
  );
}

export default Header;
