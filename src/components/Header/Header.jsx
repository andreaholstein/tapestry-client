// -------------- FXNALITY --------------
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import "./Header.scss";

function Header() {
  const location = useLocation();
  const hideHeader = ["/login", "/signup"];
  const shouldHideHeader = hideHeader.includes(location.pathname);

  const [isProfileButton, setIsProfileButton] = useState(null);
  const [isBackButton, setIsBackButton] = useState(null);

  useEffect(() => {
    function switchHeaderButtons() {
      if (location.pathname === `/`) {
        // TOGGLE STATES - PROFILE BUTTON TO SHOW
        setIsProfileButton(true);
        if (!isProfileButton) {
          setIsBackButton(null);
        }

      } else {
        // TOGGLE STATES - BACK BUTTON TO SHOW
        setIsBackButton(!isBackButton);
        if (!isBackButton) {
          setIsProfileButton(null);
        }
      }
    };
    // ------- TRIGGER HEADER BUTTON CHANGE -------
    switchHeaderButtons()
  }, [location.pathname]);

  return (
    <>
      {!shouldHideHeader && (
        <header className="header">
          <nav className="header__nav">
            <Link to="/">
              <h1 className="header__logo">tapestry</h1>
            </Link>

            {isProfileButton &&
              <Link to="/profile">
                <svg className="header__profile-icon" width="50" height="50" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M21.5 0C9.632 0 0 9.632 0 21.5C0 33.368 9.632 43 21.5 43C33.368 43 43 33.368 43 21.5C43 9.632 33.368 0 21.5 0ZM21.5 8.6C25.6495 8.6 29.025 11.9755 29.025 16.125C29.025 20.2745 25.6495 23.65 21.5 23.65C17.3505 23.65 13.975 20.2745 13.975 16.125C13.975 11.9755 17.3505 8.6 21.5 8.6ZM21.5 38.7C17.1355 38.7 11.9755 36.937 8.299 32.508C12.0654 29.5544 16.7136 27.9492 21.5 27.9492C26.2864 27.9492 30.9346 29.5544 34.701 32.508C31.0245 36.937 25.8645 38.7 21.5 38.7Z"
                    fill="#fefaec" />
                </svg>
              </Link>
            }

            {isBackButton &&
              <Link to={-1}>
                <div className="header__back">
                  <svg width="31" height="25" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.292892 6.7929C-0.0976315 7.18342 -0.0976314 7.81658 0.292893 8.20711L6.65686 14.5711C7.04738 14.9616 7.68054 14.9616 8.07107 14.5711C8.46159 14.1805 8.46159 13.5474 8.07107 13.1569L2.41421 7.5L8.07107 1.84315C8.46159 1.45262 8.46159 0.819458 8.07107 0.428933C7.68054 0.038409 7.04738 0.038409 6.65685 0.428933L0.292892 6.7929ZM21 6.5L1 6.5L1 8.5L21 8.5L21 6.5Z" fill="#fefaec" />
                  </svg>
                </div>
              </Link>
            }

          </nav>
        </header>
      )}
    </>
  );
}

export default Header;
