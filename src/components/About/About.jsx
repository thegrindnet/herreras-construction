import "./About.css";
import aboutImage from "../../assets/images/roofing-about.webp";
import { business, processSteps } from "../../utils/constants.js";

function About() {
  return (
    <section className="about" id="about" aria-labelledby="about-title">
      <div className="about__media">
        <img
          src={aboutImage}
          alt="Herrera's Construction crew using a material lift during a residential roofing project"
          loading="lazy"
        />
        <div className="about__media-label">Roofing work in progress</div>
      </div>

      <div className="about__content">
        <p className="section-kicker">About Herrera&apos;s</p>
        <h2 className="section-title" id="about-title">
          Dependable work. Straightforward service.
        </h2>
        <p className="section-copy">
          We are a dependable roofing company providing quality roof repairs,
          replacements, installations, and inspections for homes and businesses.
          Our team focuses on reliable workmanship, honest service, and
          long-lasting results to help protect your property year-round.
        </p>
        <a className="about__phone" href={business.officeHref}>
          <span>Talk about your roof</span>
          <strong>{business.officeDisplay}</strong>
        </a>
      </div>

      <div className="about__process">
        {processSteps.map((step) => (
          <article className="about__step" key={step.number}>
            {/* <span>{step.number}</span> */}
            <h3>{step.title}</h3>
            <p>{step.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default About;
