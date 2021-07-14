module.exports = {
  pathPrefix: "/minecraft-level-meter",
  siteMetadata: {
    title: "Minecraft Level Meter",
    titleTemplate: "%s - Minecraft Level Meter",
    lang: "ja",
    description: "",
    url: "https://BsmRudolph.github.io/minecraft-level-meter",
    siteUrl: "https://BsmRudolph.github.io/minecraft-level-meter",
    image: "/icons/icon-96x96.png",
    twitterUsername: "@BsmRudolph",
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
