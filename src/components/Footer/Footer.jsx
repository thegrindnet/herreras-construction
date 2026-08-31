import "./Footer.css";
import facebookIcon from "../../assets/icons/facebook.svg";
import instagramIcon from "../../assets/icons/instagram.svg";
import logoImage from "../../assets/images/herreras-construction-logo.png";
import { business, navItems } from "../../utils/constants.js";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <a className="footer__brand" href="#home" aria-label="Herrera's Construction home">
          <img src={logoImage} alt="Herrera's Construction logo" />
        </a>
        <p>{business.tagline}</p>
      </div>

      <div className="footer__grid">
        <div>
          <h2>Contact</h2>
          <a href={business.phoneHref}>{business.phoneDisplay}</a>
          <a href={`mailto:${business.email}`}>{business.email} (placeholder)</a>
        </div>
        <div>
          <h2>Visit</h2>
          <a href={business.mapUrl} target="_blank" rel="noreferrer">
            {business.addressLine1}
            <br />
            {business.addressLine2}
          </a>
        </div>
        <div>
          <h2>Navigate</h2>
          {navItems.slice(0, 5).map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </div>
        <div>
          <h2>Social</h2>
          <div className="footer__socials">
            <a
              href={business.facebookUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook placeholder link"
            >
              <img src={facebookIcon} alt="" />
            </a>
            <a
              href={business.instagramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Herrera's Construction on Instagram"
            >
              <img src={instagramIcon} alt="" />
            </a>
          </div>
          <small>Facebook link is a placeholder until the business profile is provided.</small>
        </div>
      </div>

      <div className="footer__bottom">
        <span>© {new Date().getFullYear()} Herrera&apos;s Construction</span>
        <span>Roofing & Construction • Chaparral, NM</span>
      </div>
    </footer>
  );
}

export default Footer;
