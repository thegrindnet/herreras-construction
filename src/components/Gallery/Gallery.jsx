import { useEffect, useState } from "react";
import "./Gallery.css";
import { galleryItems } from "../../utils/constants.js";

function Gallery() {
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    if (!activeItem) {
      document.body.classList.remove("gallery-modal-open");
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setActiveItem(null);
    };

    document.body.classList.add("gallery-modal-open");
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("gallery-modal-open");
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeItem]);

  return (
    <section className="gallery" id="projects" aria-labelledby="gallery-title">
      <div className="gallery__heading">
        <div>
          <p className="section-kicker">Project Gallery</p>
          <h2 className="section-title" id="gallery-title">
            Work you can see.
          </h2>
        </div>
        <p className="section-copy">
          A look at Herrera&apos;s Construction roofing and construction work across residential and
          commercial properties.
        </p>
      </div>

      <div className="gallery__grid">
        {galleryItems.map((item, index) => (
          <button
            className={`gallery__card gallery__card--${index + 1}`}
            type="button"
            key={item.title}
            onClick={() => setActiveItem(item)}
            aria-label={`Open ${item.title} image`}
          >
            <img src={item.url} alt={item.alt} loading="lazy" />
            <span className="gallery__overlay">
              <small>{item.category}</small>
              <strong>{item.title}</strong>
              <span aria-hidden="true">↗</span>
            </span>
          </button>
        ))}
      </div>

      {activeItem && (
        <div className="gallery__modal" role="dialog" aria-modal="true" aria-label={activeItem.title}>
          <button
            className="gallery__modal-backdrop"
            type="button"
            aria-label="Close image viewer"
            onClick={() => setActiveItem(null)}
          />
          <div className="gallery__modal-content">
            <button
              className="gallery__modal-close"
              type="button"
              onClick={() => setActiveItem(null)}
              aria-label="Close image viewer"
              autoFocus
            >
              ×
            </button>
            <img src={activeItem.url} alt={activeItem.alt} />
            <div>
              <small>{activeItem.category}</small>
              <h3>{activeItem.title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Gallery;
