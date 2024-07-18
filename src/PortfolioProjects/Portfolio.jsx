import React, { memo } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'; // Optional CSS for blur effect

const Portfolio = ({ removeActiveClass, Projects, loading, FilterNumber }) => {
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
                src={project}
                effect="blur" // Optional: Add a blur effect while loading
              />
            </div>
          ))}
      </div>
    </>
  );
};

export default memo(Portfolio);
