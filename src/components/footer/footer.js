import React from "react";
import { Link } from "gatsby";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import linkedin from "../../images/linkedin.png"
// import Modal from "../../components/modal"

const footer = (props) => {
  return (
    <div>
      <div id="footer">
        <section id="top-footer">
          <div className="container">
            <div className="row">
              <div className="col-md-5 mb-5">
                <div className="left-content">
                  <h5 className="footer-title mb-4">TR-Overhaul</h5>
                  <p className="footer-p text-white">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <a
                    className="fmail d-block mb-2"
                    href="mailto:anlinerleona92@yahoo.com"
                  >
                    anlinerleona92@yahoo.com
                  </a>
                  <a className="fphone d-block mb-3" href="tel:09424564784">
                    09424564784
                  </a>
                  <div className="social-media align-content-center justify-content-between">
                    {/*<a className="linkedin" href="/">
                      <LazyLoadImage
                        className="img-fluid"
                        src={linkedin}
                        alt="LinkedIn Icon"
                      />
                    </a>*/}
                  </div>
                </div>
              </div>
              <div className="col-md-3 mb-5">
                <div className="center-content">
                  <h5 className="footer-title mb-4">QUICK LINKS</h5>
                  <ul className="f-menu p-0">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/">About Us</Link>
                    </li>

                    <li>
                      <Link to="/contact">Services</Link>
                    </li>
                    <li>
                      <Link to="/">Contact</Link>
                    </li>
                    {/*<li>
                      <Modal>
                        <Link to="">Schedule</Link>
                      </Modal>
                    </li>*/}
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="right-content">
                  {/*<div class="address-map">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3106.312437084087!2d-104.75738768465044!3d38.87109297957471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x871345fef4fddd8f%3A0x3fcabb5734544f5b!2s2621%20Hearthwood%20Ln%2C%20Colorado%20Springs%2C%20CO%2080917%2C%20USA!5e0!3m2!1sen!2sph!4v1580461749686!5m2!1sen!2sph"
                      width="100%"
                      height="280"
                      frameborder="0"
                      style={{ border: "0" }}
                      allowfullscreen=""
                      title="Address"
                    />
                  </div>*/}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="copyright">
          <div className="container">
            <div className="d-blockt text-center justify-content-between align-items-center">
              <p className="copyright mb-0 text-white">
                Designed &amp; powered by 
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <span style={{ color: "#d1d1d2" }}>TR Overhaul</span>
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default footer;
