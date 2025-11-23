import React from "react"
import { StaticQuery, graphql } from "gatsby"
import logoImage from "../assets/logo.png";

const Logo = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/logo-text.md$/"}}) {
          edges {
            node {
              frontmatter { title }
              rawMarkdownBody
            }
          }
        }
      }
    `}
    render={data => {
      const logoText = data.allMarkdownRemark.edges[0]?.node.frontmatter.title || "";
      return (
        <div className="flex flex-col items-center justify-center">
          <img
            src={logoImage}
            alt="Antojitos Goliat Logo"
            className="object-cover h-96"
            onError={e => {e.target.style.display='none'}}
          />
        </div>
      );
    }}
  />
)

export default Logo
