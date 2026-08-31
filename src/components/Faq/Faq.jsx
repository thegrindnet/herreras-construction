import "./Faq.css";
import { faqs } from "../../utils/constants.js";

function Faq() {
  return (
    <section className="faq" id="faq" aria-labelledby="faq-title">
      <div className="faq__inner">
        <div className="faq__heading">
          <p className="section-kicker">Roofing FAQ</p>
          <h2 className="section-title" id="faq-title">
            Good questions deserve clear answers.
          </h2>
        </div>

        <div className="faq__list">
          {faqs.map((faq, index) => (
            <details className="faq__item" key={faq.question}>
              <summary>
                <span>0{index + 1}</span>
                <strong>{faq.question}</strong>
                <i aria-hidden="true">+</i>
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
