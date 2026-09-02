import "./ServiceArea.css";
import { business } from "../../utils/constants.js";

function ServiceArea() {
  return (
    <section
      className="service-area"
      id="service-area"
      aria-labelledby="service-area-title"
    >
      <div className="service-area__panel service-area__panel--gold">
        <p className="section-kicker">Service Area</p>
        <h2 id="service-area-title">
          Serving the El Paso & Las Cruces region.
        </h2>
        <p>
          Based in Chaparral, New Mexico, Herrera&apos;s Construction serves
          customers throughout the surrounding El Paso and Las Cruces region.
        </p>
        <a href={business.mapUrl} target="_blank" rel="noreferrer">
          Get directions to our Chaparral address ↗
        </a>
      </div>

      <div className="service-area__panel service-area__panel--dark">
        <div className="service-area__block">
          <span>Address</span>
          <a href={business.mapUrl} target="_blank" rel="noreferrer">
            {business.addressLine1}
            <br />
            {business.addressLine2}
          </a>
        </div>
        <div className="service-area__block">
          <span>Hours</span>
          {business.hours.map((row) => (
            <p key={row.days}>
              <strong>{row.days}</strong>
              <br />
              {row.time}
            </p>
          ))}
        </div>
        <div className="service-area__block">
          <span>Call or Email</span>
          <a href={business.phoneHref}>Cell: {business.phoneDisplay}</a>
          <a href={business.officeHref}>Office: {business.officeDisplay}</a>
          <a href={business.emailHref}>{business.email}</a>
        </div>
      </div>
    </section>
  );
}

export default ServiceArea;
