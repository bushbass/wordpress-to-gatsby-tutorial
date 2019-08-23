module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "alexnielsen.com",
        protocol: "http",
        hostingWPCOM: false,
        useACF: false,
        includedRoutes: ["**/posts"],
      },
    },
  ],
}
