
import React from "react"
import { StaticQuery, graphql } from "gatsby"

const ContactInfo = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/address.md$/"}}) {
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
      const address = data.allMarkdownRemark.edges[0]?.node.rawMarkdownBody || "";
      return (
        <section className="flex justify-center mt-2 mb-8">
          <div className="bg-black/40 backdrop-blur-md rounded-xl p-3 w-full max-w-md border border-white/20 shadow-lg">
            <div className="flex items-center justify-center gap-2 text-white mb-3 border-b border-white/10 pb-2">
              <i className="fa-solid fa-map-location-dot text-cr-orange text-xl"></i>
              <span className="font-body font-bold text-sm md:text-base">{address}</span>
            </div>
            <a href="https://wa.me/529995866292?text=Hola!%20Quiero%20hacer%20un%20pedido%20de%20Antojitos%20Goliat" target="_blank" rel="noreferrer" className="group bg-green-500 hover:bg-green-600 text-white font-clash uppercase py-2 px-4 rounded-lg border-b-4 border-green-700 active:border-b-0 active:translate-y-1 transition-all flex items-center justify-center gap-3 w-full">
              <i className="fa-brands fa-whatsapp text-2xl group-hover:animate-bounce"></i>
              <div className="flex flex-col items-start leading-none">
                <span className="text-xs opacity-90">Haz tu pedido al:</span>
                <span className="text-lg tracking-wider">999-586-6292</span>
              </div>
            </a>
          </div>
        </section>
      );
    }}
  />
)

export default ContactInfo
