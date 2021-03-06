const path = require("path");

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@import "main.scss";`,
  },
  images: {
    domains: ['apod.nasa.gov'],
  },
};
