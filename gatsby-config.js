module.exports = {
  pathPrefix: "/minecraft-level-meter",
  siteMetadata: {
    siteUrl: "https://BsmRudolph.github.io/minecraft-level-meter/",
    title: "Minecraft Level Meter",
  },
  plugins: [
    "gatsby-plugin-material-ui",
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
  ],
};
