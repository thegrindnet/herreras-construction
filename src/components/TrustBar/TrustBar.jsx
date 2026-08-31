import "./TrustBar.css";

const items = [
  ["01", "Residential & Commercial"],
  ["02", "Roof Repair to Replacement"],
  ["03", "El Paso + Las Cruces Region"],
];

function TrustBar() {
  return (
    <section className="trust-bar" aria-label="Service highlights">
      <div className="trust-bar__inner">
        {items.map(([number, text]) => (
          <div className="trust-bar__item" key={number}>
            {/* <span>{number}</span> */}
            <strong>{text}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrustBar;
