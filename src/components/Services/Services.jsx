import "./Services.css";
import { featuredServices, serviceGroups } from "../../utils/constants.js";

function Services() {
  return (
    <section className="services" id="services" aria-labelledby="services-title">
      <div className="services__intro">
        <div>
          <p className="section-kicker">Roofing Services</p>
          <h2 className="section-title" id="services-title">
            Roofing built around the problem at hand.
          </h2>
        </div>
        <p className="section-copy services__intro-copy">
          From a small leak to a full roof replacement, Herrera&apos;s Construction provides a wide
          range of roofing services for homes and businesses.
        </p>
      </div>

      <div className="services__featured">
        {featuredServices.map((service) => (
          <article className="services__feature" key={service.number}>
            {/* <span className="services__number">{service.number}</span> */}
            <h3>{service.title}</h3>
            <p>{service.copy}</p>
            <ul>
              {service.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="services__all">
        <div className="services__all-heading">
          <p className="section-kicker">Complete Capabilities</p>
          <h3>More ways we can help protect your property.</h3>
        </div>
        <div className="services__groups">
          {serviceGroups.map((group) => (
            <div className="services__group" key={group.title}>
              <h4>{group.title}</h4>
              <ul>
                {group.services.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
