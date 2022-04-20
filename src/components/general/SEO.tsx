import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const SEO = ({
  title,
  description,
  path,
  date,
  thumbnail,
  readtime,
  tags,
  article,
}: any) => {
  const { site } = useStaticQuery(query);
  //gatsby-config.js
  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    defaultImage,
    twitterUsername,
  }: any = site.siteMetadata;
  console.log("siteUrl", siteUrl);

  // check environment to get proper url
  const env_siteUrl =
    process.env.NODE_ENV === "development" ? "http://localhost:8000" : siteUrl;

  let seo_image_path;

  if (thumbnail) {
    seo_image_path = thumbnail.childImageSharp.fluid.src;
  } else {
    seo_image_path = defaultImage;
  }

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${env_siteUrl}${seo_image_path}`,
    url: `${env_siteUrl}${path}`,
  };

  //console.log("seo:", seo);
  //console.log(process.env.NODE_ENV);
  //console.log("seo.image:", seo.image);
  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate}>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {(article ? true : null) && <meta property="og:type" content="article" />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta name="twitter:card" content="summary_large_image" />
      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  );
};

export default SEO;

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        defaultImage: image
        twitterUsername
      }
    }
  }
`;

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
};

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
};
