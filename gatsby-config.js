module.exports = {
  pathPrefix: "/minecraft-level-meter",
  siteMetadata: {
    title: "Minecraft Level Meter",
    titleTemplate: "%s - Minecraft Level Meter",
    lang: "ja",
    description: "目標レベルまでの進捗をパーセンテージで表示します。",
    url: "https://BsmRudolph.github.io/minecraft-level-meter",
    siteUrl: "https://BsmRudolph.github.io/minecraft-level-meter",
    image: "/images/thumbnail.png",
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
