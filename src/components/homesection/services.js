import React from "react";
import service1 from "../../images/services-1.jpg";
import service2 from "../../images/services-2.jpg";
import service3 from "../../images/services-3.jpg";

const Services = () => (
  <section id="Services">
    <div className="container">
      <div className="row">
        <div className="col-md-4 align-self-stretch">
          <div className="d-block services-wrap text-center">
            <img src={service1} className="img-fluid" alt="services 1" />
            <div className="media-body p-2 mt-3">
              <h3 className="heading">Exercise Program</h3>
              <p>
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic.
              </p>
              <p>
                <a href="#" className="btn btn-primary btn-outline-primary">
                  Read more
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 align-self-stretch">
          <div className="d-block services-wrap text-center">
            <img src={service2} className="img-fluid" alt="services 1" />
            <div className="media-body p-2 mt-3">
              <h3 className="heading">Exercise Program</h3>
              <p>
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic.
              </p>
              <p>
                <a href="#" className="btn btn-primary btn-outline-primary">
                  Read more
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 align-self-stretch">
          <div className="d-block services-wrap text-center">
            <img src={service3} className="img-fluid" alt="services 1" />
            <div className="media-body p-2 mt-3">
              <h3 className="heading">Exercise Program</h3>
              <p>
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic.
              </p>
              <p>
                <a href="#" className="btn btn-primary btn-outline-primary">
                  Read more
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Services;
