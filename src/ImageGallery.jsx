import { useState } from "react";

function ImageGallery({ images }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="gallery-container">
      <div className="main-image-container">
        <img
          src={images[activeIndex].src}
          alt={images[activeIndex].alt}
          className="main-gallery-image"
        />
      </div>

      <div className="gallery-description">
        <h4>{images[activeIndex].title}</h4>
        <p>{images[activeIndex].description}</p>
      </div>

      <div className="thumbnail-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={`thumbnail ${index === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
          >
            <img src={image.src} alt={`Thumbnail ${index + 1}`} />
          </div>
        ))}
      </div>

      <style jsx>{`
        .gallery-container {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          width: 100%;
        }

        .main-image-container {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        .main-gallery-image {
          width: 100%;
          max-height: 500px;
          object-fit: contain;
        }

        .gallery-description {
          padding: 1rem;
          background-color: var(--surface-variant);
          border-radius: 8px;
          margin: 1rem 0;
        }

        .thumbnail-container {
          display: flex;
          gap: 0.5rem;
          overflow-x: auto;
          padding: 0.5rem 0;
        }

        .thumbnail {
          width: 100px;
          height: 75px;
          border-radius: 4px;
          overflow: hidden;
          cursor: pointer;
          opacity: 0.7;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        .thumbnail.active {
          opacity: 1;
          border-color: var(--primary);
        }

        .thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>
    </div>
  );
}

export default ImageGallery;
