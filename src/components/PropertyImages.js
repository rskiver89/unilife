import React, { useState } from 'react';
import '../styles/PropertyImages.css';

function PropertyImages({ images }) {
  const [mainImage, setMainImage] = useState(images[0]);

  const handleMouseEnter = (image) => {
    setMainImage(image);
  };

  const handleMouseLeave = () => {
    setMainImage(images[0]);
  };

  return (
    <div className="property-images">
      <img className="main-image" src={mainImage} alt="Main property image" />
      <div className="thumbnails">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Property image ${index + 1}`}
            onMouseEnter={() => handleMouseEnter(image)}
            onMouseLeave={handleMouseLeave}
          />
        ))}
      </div>
    </div>
  );
};

export default PropertyImages;
