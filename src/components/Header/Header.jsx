import "./Header.css";
import Navigation from "../Navigation/Navigation.jsx";
import logoImage from "../../assets/images/herreras-construction-logo.png";
import { business } from "../../utils/constants.js";

function Header() {
  return (
    <header className="header">
      <div className="header__utility">
        <div className="header__utility-inner">
          <p className="header__service-area">Serving {business.serviceArea}</p>
          <div className="header__utility-links">
            <span>Mon-Sat 6AM-7PM</span>
            <a href={business.phoneHref}>Cell:{business.phoneDisplay}</a>
            <a href={business.officeHref}>Office:{business.officeDisplay}</a>
            <a href={business.emailHref}>Email Us</a>
          </div>
        </div>
      </div>

      <div className="header__main">
        <a
          className="header__brand"
          href="#home"
          aria-label="Herrera's Construction home"
        >
          <img
            className="header__logo"
            src={logoImage}
            alt="Herrera's Construction logo"
          />
        </a>

        <Navigation />

        <a
          className="header__call button button--gold"
          href={business.phoneHref}
        >
          Call Now
        </a>
      </div>
    </header>
  );
}

export default Header;
