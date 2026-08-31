import "./Hero.css";
import heroImage from "../../assets/images/roofing-hero.webp";
import { business } from "../../utils/constants.js";

function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <img
        className="hero__image"
        src={heroImage}
        alt="Herrera's Construction crew installing shingles on a residential roof"
      />
      <div className="hero__shade" />
      <div className="hero__content">
        <p className="hero__eyebrow">Roofing & Construction • Chaparral, New Mexico</p>
        <h1 className="hero__title" id="hero-title">
          Strong roofs.
          <span>Reliable work.</span>
        </h1>
        <p className="hero__copy">
          Dependable roof repairs, replacements, installations, and inspections for homes and
          businesses across the El Paso and Las Cruces region.
        </p>
        <div className="hero__actions">
          <a className="button button--gold" href={business.phoneHref}>
            Call {business.phoneDisplay}
          </a>
          <a className="button button--outline" href="#services">
            Explore Roofing Services
          </a>
        </div>
      </div>
      <div className="hero__side-note" aria-hidden="true">
        {business.tagline}
      </div>
      <a className="hero__region" href="#service-area">
        <span>Service Region</span>
        <strong>El Paso + Las Cruces</strong>
        <span aria-hidden="true">↘</span>
      </a>
    </section>
  );
}

export default Hero;
