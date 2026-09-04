import "./CommercialExperience.css";
import { business, commercialCapabilities } from "../../utils/constants.js";
import commercialImage from "../../assets/images/gallery-05-commercial-site.webp";

function CommercialExperience() {
  const bidSubject = encodeURIComponent("Invite Herrera's Construction to Bid");
  const bidBody = encodeURIComponent(
    "Hello Herrera's Construction,\n\nWe would like to invite your team to bid on an upcoming project. Please contact us regarding project details and bidder requirements."
  );

  return (
    <section
      className="commercial"
      id="commercial"
      aria-labelledby="commercial-title"
    >
      <div className="commercial__image-wrap">
        <img
          className="commercial__image"
          src={commercialImage}
          alt="Herrera's Construction trailer at a commercial project site"
        />
        <span className="commercial__image-label">
          Commercial / Institutional / Government
        </span>
      </div>

      <div className="commercial__content">
        <p className="section-kicker">Commercial &amp; Government Experience</p>
        <h2 className="section-title" id="commercial-title">
          Ready for larger scopes and professional bid opportunities.
        </h2>
        <p className="section-copy">
          Herrera&apos;s Construction brings roofing and construction experience
          to commercial, institutional, and government project environments. We
          welcome opportunities to work with general contractors, agencies,
          property managers, facilities teams, and organizations that need
          dependable roofing and construction support.
        </p>

        <ul
          className="commercial__capabilities"
          aria-label="Commercial capabilities"
        >
          {commercialCapabilities.map((capability) => (
            <li key={capability}>{capability}</li>
          ))}
        </ul>

        <a
          className="button button--dark commercial__bid-button"
          href={`mailto:${business.email}?subject=${bidSubject}&body=${bidBody}`}
        >
          Invite Us to Bid
        </a>
      </div>
    </section>
  );
}

export default CommercialExperience;
