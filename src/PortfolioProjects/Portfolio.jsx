import React, { memo } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'; // Optional CSS for blur effect
import * as portfolioImages from '../PortfolioImages/Portfolio'; // Import all portfolio images including WebP versions

const Portfolio = ({ removeActiveClass, Projects, loading, FilterNumber }) => {
  // Function to detect WebP support
  const supportsWebp = () => {
    // Check if the environment supports creating a canvas element
    if (typeof document === 'undefined' || !document.createElement) {
      return false;
    }

    const elem = document.createElement('canvas');
    if (!!(elem.getContext && elem.getContext('2d'))) {
      // Check if canvas supports toDataURL with 'image/webp'
      return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    }

    return false;
  };

  // Function to get the appropriate image format (JPEG/PNG or WebP)
  const getProjectImage = (index) => {
    if (supportsWebp()) {
      // Use WebP version if supported
      switch (index) {
        case 0:
          return portfolioImages.Project1Webp || portfolioImages.Project1; // Fallback to JPEG/PNG if WebP not available
        case 1:
          return portfolioImages.Project2Webp || portfolioImages.Project2;
        case 2:
          return portfolioImages.Project3Webp || portfolioImages.Project3;
        case 3:
          return portfolioImages.Project4Webp || portfolioImages.Project4;
        case 4:
          return portfolioImages.Project5Webp || portfolioImages.Project5;
        case 5:
          return portfolioImages.Project6Webp || portfolioImages.Project6;
        case 6:
          return portfolioImages.Project7Webp || portfolioImages.Project7;
        case 7:
          return portfolioImages.Project8Webp || portfolioImages.Project8;
        default:
          return portfolioImages.Project1; // Default to first image
      }
    } else {
      // Use JPEG/PNG version as fallback
      switch (index) {
        case 0:
          return portfolioImages.Project1;
        case 1:
          return portfolioImages.Project2;
        case 2:
          return portfolioImages.Project3;
        case 3:
          return portfolioImages.Project4;
        case 4:
          return portfolioImages.Project5;
        case 5:
          return portfolioImages.Project6;
        case 6:
          return portfolioImages.Project7;
        case 7:
          return portfolioImages.Project8;
        default:
          return portfolioImages.Project1; // Default to first image
      }
    }
  };

  return (
    <>
      <div className="links">
        {['All', 'App', 'Photography', 'Web', 'Print'].map((category, index) => (
          <a key={index} onClick={removeActiveClass} aria-colindex={index} className={`link${index === 0 ? ' active' : ''}`} href={`#${category}`}>
            {category}
          </a>
        ))}
      </div>
      <div className="Portfolio-images">
        {Projects && !loading &&
          Projects.map((project, i) => i >= FilterNumber && (
            <div key={i} onClick={removeActiveClass} className="image">
              <LazyLoadImage
                alt="Project"
                src={getProjectImage(i)}
                effect="blur" // Optional: Add a blur effect while loading
              />
            </div>
          ))}
      </div>
    </>
  );
};

export default memo(Portfolio);
