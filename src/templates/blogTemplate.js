import React from 'react';
import { graphql } from 'gatsby';
import HeroHeader from '../components/general/HeroHeader';
import Footer from '../components/Footer';
import './blog-template-css.css';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  return (
    <div>
      <HeroHeader highlighted="posts" />
      <div className="blog-post-container">
        <div className="blog-post">
          <h1 className="postTitle">{frontmatter.title}</h1>
          <h2 className="postDate">
            {frontmatter.date} /{' '}
            <span className="readTime">{frontmatter.readtime}</span>
          </h2>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export const pageQuery = graphql`
  query ($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        readtime
      }
    }
  }
`;
