
import React from "react"
import { StaticQuery, graphql } from "gatsby"

const FooterInfo = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/footer.md$/"}}) {
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
      const footerText = data.allMarkdownRemark.edges[0]?.node.rawMarkdownBody || "";
      return (
       <section className="flex justify-center mt-2 mb-8">
          <div className="inline-block bg-red-600 border-4 border-red-800 rounded-xl p-4 transform -rotate-2 shadow-lg mb-4">
            <h3 className="font-clash text-2xl uppercase">Aviso Importante</h3>
            <p className="font-body font-bold text-lg"><i className="fa-solid fa-ban mr-2"></i> MIERCOLES Y DOMINGO NO LABORA</p>
          </div>
        
        
        </section>
      );
    }}
  />
)

export default FooterInfo
