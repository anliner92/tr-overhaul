import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
// import MySwiper from "../components/swiper/swiper";
// import SampleForm from "../components/form/form";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/blur.css";

import AboutUs from "../components/homesection/about-us.js";
import Services from "../components/homesection/services.js";
import HeroBanner from "../components/hero/index.js";

class IndexPage extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title;
    const siteDescription = this.props.data.site.siteMetadata.description;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={siteTitle} description={siteDescription} />
        <HeroBanner />
        <Services />
        <AboutUs />
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
