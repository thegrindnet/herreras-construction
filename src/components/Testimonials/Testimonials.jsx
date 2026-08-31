import "./Testimonials.css";
import { testimonials } from "../../utils/constants.js";

function Testimonials() {
  return (
    <section className="testimonials" id="reviews" aria-labelledby="testimonials-title">
      <div className="testimonials__inner">
        <div className="testimonials__heading">
          <p className="section-kicker">Customer Reviews</p>
          <h2 className="section-title" id="testimonials-title">
            What customers said.
          </h2>
        </div>

        <div className="testimonials__list">
          {testimonials.map((testimonial, index) => (
            <article className="testimonials__card" key={testimonial.name}>
              <div className="testimonials__meta">
                <span>0{index + 1}</span>
                <div className="testimonials__stars" aria-label="5 star review">
                  ★★★★★
                </div>
              </div>
              <blockquote>“{testimonial.review}”</blockquote>
              <a href={testimonial.url} target="_blank" rel="noreferrer">
                {testimonial.name} <span>Google review ↗</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
