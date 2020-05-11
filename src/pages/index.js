import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/swiper/heroswiper";
// import MySwiper from "../components/swiper/swiper";
// import SampleForm from "../components/form/form";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/blur.css";
import herobg1 from "../images/hero-bg-1.jpg";
import herobg2 from "../images/hero-bg-2.jpg";
import herobg3 from "../images/hero-bg-3.jpg";

class IndexPage extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title;
    const siteDescription = this.props.data.site.siteMetadata.description;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={siteTitle} description={siteDescription} />
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
                      Lorem Ipsum has been the industry's standard dummy text
                      ever since the 1500s, when an unknown printer took a
                      galley of type and scrambled it to make a type specimen
                      book.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default IndexPage;

export const indexPageQuery = graphql`
  query indexPageQuery {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
  }
`;
