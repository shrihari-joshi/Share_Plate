import React, { useEffect, useState } from 'react';
import './Homepage.css';

const Homepage = () => {

  return (
    <div className="container">
      <div class="slider-frame">
            <div class="slide-images">
                    <div class="img-container1">
                    </div>
                    <div class="img-container2">
                    </div>
                    <div class="img-container3">
                    </div>
            </div>
        </div>
      <div className="description">
        <h2>Site Description</h2>
        <p>
          This is a description of your site. You can add any text or HTML
          content here to describe your site.
        </p>
      </div>
    </div>
  );
};

export default Homepage;
