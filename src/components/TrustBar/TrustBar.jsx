import "./TrustBar.css";

const items = [
  ["01", "Residential & Commercial"],
  ["02", "Roof Repair to Replacement"],
  ["03", "El Paso & Las Cruces Region"],
  ["04", "Licensed, Bonded & Insured"],
  ["05", "Government Contractor"],
  ["06", "General Liability Insurance"],
  ["07", "Workers' Compensation"],
  ["08", "Commercial Auto Insurance"],
  ["09", "Umbrella/Excess Coverage"],
  ["10", "Commercial & Government Experience"],
  ["11", "BBB A+ Rating"],
  ["12", "Institutional Project Experience"],
];

function TrustBar() {
  return (
    <section className="trust-bar" aria-label="Service highlights">
      <div className="trust-bar__title">
        <h2>Company Credentials & Qualifications</h2>
      </div>
      <div className="trust-bar__inner">
        {items.map(([number, text]) => (
          <div className="trust-bar__item" key={number}>
            <strong>-{text}-</strong>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrustBar;
