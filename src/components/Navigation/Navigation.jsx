import { useEffect, useState } from "react";
import "./Navigation.css";
import { business, navItems } from "../../utils/constants.js";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("nav-open", isOpen);
    return () => document.body.classList.remove("nav-open");
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navigation" aria-label="Primary navigation">
      <button
        className="navigation__toggle"
        type="button"
        aria-expanded={isOpen}
        aria-controls="primary-menu"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setIsOpen((value) => !value)}
      >
        <span />
        <span />
        <span />
      </button>

      <div
        className={`navigation__panel ${isOpen ? "navigation__panel--open" : ""}`}
        id="primary-menu"
      >
        <ul className="navigation__list">
          {navItems.map((item) => (
            <li key={item.href}>
              <a className="navigation__link" href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a className="navigation__mobile-call button button--gold" href={business.phoneHref}>
          Call {business.phoneDisplay}
        </a>
      </div>
    </nav>
  );
}

export default Navigation;
