import React from "react";
import AboutImg from "../../images/gatsby-astronaut.png";
import Logo from "../../images/logo.png";

const AboutUs = () => (
  <section id="about-us">
    <div className="container">
      <div className="row align-items-center mx-0">
        <div className="col-md-5 p-md-5 mb-5">
          <img src={AboutImg} className="img-fluid" alt="About Us" />
        </div>
        <div className="col-md-7">
          <div className="heading-section mb-5">
            <div className="pl-md-5">
              <h2 className="mb-2">About Us</h2>
            </div>
            <div className="pl-md-5">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Blanditiis deleniti reprehenderit animi est eaque corporis!
                Nisi, asperiores nam amet doloribus, soluta ut reiciendis.
                Consequatur modi rem, vero eos ipsam voluptas.
              </p>
              <p>
                Error minus sint nobis dolor laborum architecto, quaerat.
                Voluptatum porro expedita labore esse velit veniam laborum quo
                obcaecati similique iusto delectus quasi!
              </p>
              <div class="tr-overhaul-about d-flex align-items-center mt-5">
                <img src={Logo} alt="lkajsdkf" className="about-us-img" />
                <div class="text pl-3">
                  <h3 class="mb-0">TR Overhaul</h3>
                  <span class="position">
                    Technician From Software to Hardware
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutUs;
