import React from "react"
import { StaticQuery, graphql } from "gatsby"


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
            src="https://lh3.googleusercontent.com/sitesv/AAzXCkdMcpBxex34ZPSziRubaZGRGSBcyJRIunw0lELyIxUi83hhARoyqSbel1bS-n4KtJrPbLiDj36repmH6eCdc5nZabMp1IRtINGoX5rgAHHJjjih_HkCw9gZSuqCZ6lpYIQX8NPuGxRRZvcxe-lmicNrLsZDHVPUQIDEcS-wok8VKB1gT9V86Lt7cArkGgI45CucdCMQAzTkgv3QjG0WgXmmjKFBQlj75Qjx=w1280"
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
