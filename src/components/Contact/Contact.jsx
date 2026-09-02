import "./Contact.css";
import { business } from "../../utils/constants.js";

function Contact() {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="contact__inner">
        <div className="contact__copy">
          <p className="section-kicker">Ready to Talk Roofing?</p>
          <h2 id="contact-title">Call Herrera&apos;s Construction.</h2>
          <p>
            Need a roof inspection, repair, replacement, or estimate? Call to
            discuss your property and the roofing work you need.
          </p>
        </div>

        <div className="contact__actions">
          <a className="contact__phone" href={business.phoneHref}>
            <span>Call now</span>
            <strong>{business.phoneDisplay}</strong>
          </a>
          <a className="button button--gold" href={business.phoneHref}>
            Call for Roofing Service
          </a>
          <a className="button button--gold" href={`mailto:${business.email}`}>
            {business.email}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
