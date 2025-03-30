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
    </div>
  );
}

export default ImageGallery;
