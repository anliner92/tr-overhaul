import React from "react";
import { Link } from "gatsby";
import Hero from "../swiper/heroswiper";

import herobg1 from "../../images/hero-bg-1.jpg";
import herobg2 from "../../images/hero-bg-2.jpg";
import herobg3 from "../../images/hero-bg-3.jpg";

const HeroBanner = () => (
  <div id="hero" className="hero-section bg-light">
    <div className="container-fluid p-0">
      <Hero>
        <div
          style={{
            backgroundImage: `url(${herobg1})`,
            backgroundPosition: `center`,
            backgroundSize: `cover`,
          }}
        >
          <p className="d-none" />
        </div>
        <div
          style={{
            backgroundImage: `url(${herobg2})`,
            backgroundPosition: `center`,
            backgroundSize: `cover`,
          }}
        >
          <p className="d-none" />
        </div>
        <div
          style={{
            backgroundImage: `url(${herobg3})`,
            backgroundPosition: `center`,
            backgroundSize: `cover`,
          }}
        >
          <p className="d-none" />
        </div>
      </Hero>
      <div className="  hero-content">
        <div className="row">
          <div className="col-md-7 mx-auto my-0">
            <div className="text-center">
              <h1 className="herotitle text-white">
                Lorem Ipsum is simply dummy text
              </h1>
              <p className="herop mb-6 hero-sub-title text-white p-4">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
              <button className="btn-use">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HeroBanner;
