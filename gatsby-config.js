module.exports = {
  siteMetadata: {
    title: "Goliat Gatsby Site",
    description: "Migración de index.html a Gatsby",
    author: "",
  },
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content/`,
      },
    },
    `gatsby-transformer-remark`,
  ],
};
