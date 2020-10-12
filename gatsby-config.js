module.exports = {
  siteMetadata: {
    title: "Deft.",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Gatsby + Node.js (TypeScript) API",
        short_name: "Gatsby + Node.js (TypeScript)",
        start_url: "/",
        icon: "src/images/gatsby-icon.png",
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            variants: [`400`, "500", `700`, "800"],
          },
        ],
      },
    },
  ],
};
