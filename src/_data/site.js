// process.env.ELEVENTY_ENV seems to not be working, using meta.rootURL instead
const isDev = process.env.ELEVENTY_ENV === 'development';
module.exports = {
  baseUrl: isDev ? 'http://localhost:8080' : 'https://sensingtheforest.github.io'
}
